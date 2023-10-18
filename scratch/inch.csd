<CsoundSynthesizer>
<CsOptions>
; Select audio/midi flags here according to platform
-odac   -iadc   ;;;realtime audio I/O
-b 64

; For Non-realtime ouput leave only the line below:
; inch.wav -W ;;; for file output any platform
</CsOptions>
<CsInstruments>

sr = 44100
ksmps = 32
nchnls = 2
0dbfs  = 1

instr 1 ;nchnls channels in, two channels out

ainl, ainr inch 1, 2			;grab your mic and sing

chnmix ainl, "out"
chnmix ainr, "out"

endin

instr out

aout chnget "out"

;aout flanger ain, a ( .001 ), .7

outs aout, aout

chnclear "out"

endin

</CsInstruments>
<CsScore>

#define amplify(i)#
i 1.$i.1 0 -1
i 1.$i.2 0 -1
i 1.$i.3 0 -1
i 1.$i.4 0 -1
i 1.$i.5 0 -1#

$amplify(1)
$amplify(2)
$amplify(3)

i "out" 0 1000000

e
</CsScore>
</CsoundSynthesizer>
