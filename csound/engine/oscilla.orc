#include "performance.orc"
#include "design.orc"

#define program #p4#
#define channel #p5#
#define key #p6#
#define velocity #p7#
#define instance #p8#
#define counter #p9#
#define outputChannel #p10#

#define module #p11#
#define port #p12#

#define note #

iProgram = $program
iChannel = $channel
iKey = $key
iVelocity = $velocity
iInstance = $instance
iCounter = $counter
iOutputChannel = $outputChannel

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
giChannels = 128 * 16 * nchnls
giInstance [] init giChannels

instr oscilla

;midiprogramchange $program
$program = 0

iMIDI = 1
iChannel midichn

if iChannel == 0 then

iChannel = $channel
iMIDI = 0

endif

midinoteonkey $key, $velocity

aOutput init 0
iInstance = $key + ( iChannel - 1 ) * 128
giInstance [ iInstance ] = giInstance [ iInstance ] + 1
iCounter = giInstance [ iInstance ]
iOutputChannel = 1

while iOutputChannel <= nchnls do

iTag = ( iInstance + ( iOutputChannel - 1 ) * 2048 ) / giChannels

oPlug aOutput, iInstance, iCounter, iOutputChannel, iTag

iOutputChannel += 1

od

print iMIDI

/*
cggoto iMIDI == 0, score

kReleased init 0
kStatus, kChannel, kKey, kVelocity midiin

if kStatus == 128 && kKey == $key then

kReleased = 1

endif

goto write

score:
*/

kReleased release

write:

SReleaseLocator sprintf "%d/%d", giReleaseDescriptor, iInstance

chnset kReleased, SReleaseLocator

endin


instr link

iProgram = p4
SSourceModule strget p5
SDestinationModule strget p6

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
#include "listen.orc"
