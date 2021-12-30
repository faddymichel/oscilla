<CsoundSynthesizer>

<CsOptions>

-odac
-T

</CsOptions>

<CsInstruments>

sr = 44100
ksmps = 32
nchnls = 2
0dbfs = 1

massign 0, "oscilla"

giNextFT vco2init 31, 100
#include "engine.instr"
#include "modules.orc"


</CsInstruments>

<CsScore>

;i "oscilla" 0 1 440 55

</CsScore>

</CsoundSynthesizer>
