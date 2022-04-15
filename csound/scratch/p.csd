<CsoundSynthesizer>

<CsOptions>

-n

</CsOptions>

<CsInstruments>

sr = 44100
ksmps = 10
nchnls = 1

instr 1

iTest = p ( 4 )
STest = p ( 4 )
iLength strlen STest

SPrint sprintf "Number: %d, Length: %d, String: %s\n", iTest, iLength, STest

prints SPrint

endin

</CsInstruments>

<CsScore>

i 1 0 0 13

</CsScore>

</CsoundSynthesizer>
