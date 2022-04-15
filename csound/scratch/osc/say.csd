<CsoundSynthesizer>

<CsOptions>

-T
-odac

</CsOptions>

<CsInstruments>

;sr = 44100
kr = 512
ksmps = 32
nchnls = 1

instr say

iKey = 0
iVelocity = 0

midinoteonkey iKey, iVelocity

iNote = 1 + ( iKey / 127 )

kReleased release

cggoto kReleased != 1, end

kDuration timeinsts
;kDuration = ( kDurationCycles - 1 ) / kr
kDurationSamples = int ( kDuration * ksmps )
kDuration = kDurationSamples / ksmps

SLine sprintfk "i \"oscilla\" 0 %f 0 1 %d %d\n", kDuration, iKey, iVelocity

OSCsend kReleased, "", 1313, "/score", "s", SLine

end:

endin

</CsInstruments>

<CsScore>


</CsScore>

</CsoundSynthesizer>
