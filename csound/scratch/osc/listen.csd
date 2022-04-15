<CsoundSynthesizer>

<CsOptions>

-odac
-Lstdin

</CsOptions>

<CsInstruments>

sr = 44100
ksmps = 32
nchnls = 1
0dbfs = 1

giHandle OSCinit 1313

instr 1

iFrequency = cpsmidinn ( p4 )
iAmplitude = p5 / 127

aSound poscil iAmplitude, iFrequency

out aSound

endin

instr listen

SLine init ""

kScore OSClisten giHandle, "/score", "s", SLine

scoreline SLine, kScore

endin

</CsInstruments>

<CsScore>
</CsScore>

</CsoundSynthesizer>
