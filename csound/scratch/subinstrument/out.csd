<CsoundSynthesizer>

<CsOptions>

-odac

</CsOptions>

<CsInstruments>

sr = 44100
ksmps = 32
nchnls = 1
0dbfs = 1

massign 0, "oscilla"

giNextFT vco2init 31, 100
#include "engine.instr"
#include "modules.orc"


</CsInstruments>

<CsScore>
</CsScore>

</CsoundSynthesizer>
