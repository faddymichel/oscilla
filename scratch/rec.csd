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

instr out

aInput

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
