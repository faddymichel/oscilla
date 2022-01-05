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

giNextFT vco2init 31, 100

#include "plug.opcode"
#include "output.opcode"
#include "port.opcode"

#include "maestro.instr"
#include "modules.orc"

#include "link.opcode"
#include "controller.opcode"

#include "design.instr"

</CsInstruments>

<CsScore>

;i "oscilla" 0 1 440 55

</CsScore>

</CsoundSynthesizer>
