<CsoundSynthesizer>

<CsOptions>

-n

</CsOptions>


<CsInstruments>

sr = 100
ksmps = 1
nchnls = 1

strset 1, "Faddy"
strset 2, "Samaan"


instr 1

SFN strget 1
SLN strget 2

prints "Before: %s %S", SFN, SLN

SP4 strget p4
strset 2, SP4
SLN strget 2

prints "After: %s %S", SFN, SLN

endin

</CsInstruments>


<CsScore>

i 1 0 0 "Michel"

</CsScore>

</CsoundSynthesizer>
