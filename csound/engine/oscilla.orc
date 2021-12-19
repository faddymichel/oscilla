#include "performance.orc"

#define program #p4#
#define channel #p5#
#define key #p6#
#define velocity #p7#
#define outputChannel #p8#
#define instance #p9#

#define module #p10#
#define port #p11#

#define note #

iProgram = $program
iChannel = $channel
iKey = $key
iVelocity = $velocity
iOutputChannel = $outputChannel
iInstance = $instance

#

#define controllerNote #$note

iModule = $module
SPort strget $port

#

iChannel = 1

while iChannel <= 16 do

massign iChannel, "oscilla"

iChannel += 1

od


#include "protocol/index.orc"


giNextFT vco2init 31, 100
giInstance = 0

instr oscilla

midiprogramchange $program

iChannel midichn

if iChannel == 0 then

iChannel = $channel

endif

midinoteonkey $key, $velocity

iOutputChannel = 0
aOutput init 0
giInstance += 1

while iOutputChannel < nchnls do

iTag = int ( frac ( p1 ) * 1000 ) / 1000 + iOutputChannel / 1000000

oPlug aOutput, iOutputChannel, giInstance, iTag

iOutputChannel += 1

od

endin


instr link

iProgram = p4
SSourceModule strget p5
SDestinationModule strget p6

printf_i SSourceModule, 1

oLink iProgram, SSourceModule, SDestinationModule

endin


instr port

iProgram = p4
SModule strget p5
SPort strget p6
SController strget p7

oPort iProgram, SModule, SPort, SController

endin


#define parameterInstrument(rate) #

instr parameter_$rate

iProgram = p4
SPort strget p5
SParameter strget p6
$rate.Value = p7

oAssignment_$rate iProgram, SPort, SParameter, $rate.Value

endin

#

$parameterInstrument(i)
$parameterInstrument(k)

#include "modules/oscillator.orc"
#include "modules/out.orc"

#include "controllers/adsr.orc"

#include "design.orc"
