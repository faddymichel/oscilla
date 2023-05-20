<CsoundSynthesizer>

<CsOptions>

-odac
-Ma

-b 768
-B 1024

</CsOptions>

<CsInstruments>

#include "setting.part"

#include "maqam/index.part"
#include "metronome/index.part"
#include "controller/index.part"
#include "beep.part"

#ifdef synthesizer

#includestr "$synthesizer"

#else

#include "synthesizer.part"

#end

#include "recorder.part"
#include "output.part"
#include "clear.part"
#include "exit.part"

</CsInstruments>
<CsScore>
</CsScore>

</CsoundSynthesizer>
