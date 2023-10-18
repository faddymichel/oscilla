<CsoundSymthesizer>

<CsOptions>

-+rtaudio=alsa
-odac
-iadc

-b 128
-B 512

</CsOptions>

<CsInstruments>

sr = 48000
ksmps = 32
nchnls = 2
0dbfs = 1

#include "orc/parameter.part"
#include "orc/time.part"

#include "orc/oscilla.part"

#include "orc/kick.part"
#include "orc/snare.part"
#include "orc/hi-Hat.part"

#include "orc/drone.part"

#include "orc/recorder.part"

#include "orc/rewind.part"

instr out

aLeft chnget "left"
aRight chnget "right"

aLeft clip aLeft, 0, 1
aRight clip aRight, 0, 1

outs aLeft, aRight

chnclear "left"
chnclear "right"

endin

</CsInstruments>

<CsScore>

f 0 36000

#define oscilla(instance) #i 13.$instance 0 -1#
#define add #233#

#include "sco/maasoom.part"
;#include "sco/drone.part"

i "out" 0 -1

</CsScore>

</CsoundSynthesizer>
