#include "performance.orc"

#define starter #13#

#define program #p4#
#define channel #p5#
#define key #p6#
#define velocity #p7#
#define output #p8#
#define instance #p9#

#define module #p10#
#define port #p11#

#define note #

iProgram = $program
iChannel = $channel
iKey = $key
iVelocity = $velocity
iOutput = $output
iInstance = $instance

#

iChannel = 1

while iChannel <= 16 do

massign iChannel, $starter

iChannel = iChannel + 1

od


#include "protocol/index.orc"


giNextFT vco2init 31, 100
giInstance = 0

instr $starter, mStarter

giInstance = giInstance + 1
$instance = giInstance

midiprogramchange $program

iChannel midichn

if iChannel == 0 then

iChannel = $channel

endif

midinoteonkey $key, $velocity

iOutput = 0
aOutput init 0

while iOutput < nchnls do

oPlug aOutput, iOutput

iOutput = iOutput + 1

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
SController strget p5
SParameter strget p6
$rate.Value = p7

oAssignment_$rate iProgram, SController, SParameter, $rate.Value

endin

#

$parameterInstrument(i)
$parameterInstrument(k)

#include "modules/oscillator.orc"
#include "modules/out.orc"

#include "controllers/adsr.orc"
