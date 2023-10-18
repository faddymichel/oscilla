<CsoundSynthesizer>
<CsOptions>
; Select audio/midi flags here according to platform
-odac  ;;;realtime audio out
;-iadc    ;;;uncomment -iadc if realtime audio input is needed too
; For Non-realtime ouput leave only the line below:
; -o rewindscore.wav -W ;;; for file output any platform
</CsOptions>
<CsInstruments>

sr = 44100
ksmps = 32
nchnls = 2
0dbfs  = 1

giX = 1

print giX
 
instr 1

giX = p4

endin

instr 100

rewindscore

endin
</CsInstruments>
<CsScore>
i1 0 1 1.00 13

i100 1 1
e
</CsScore>
</CsoundSynthesizer>

