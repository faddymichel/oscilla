<CsoundSynthesizer>

<CsOptions>

-F test.midi
-n
-T

</CsOptions>

<CsInstruments>

kr = 516
ksmps = 64
nchnls = 1

giStart = -1

instr 1

iCycles timek

if giStart == -1 then

giStart = iCycles

endif

iCycles = iCycles - giStart
iTime = iCycles / kr
;iSamples = int ( iTime * ksmps )
;iTime = iSamples / ksmps

iProgram = 0
iChannel = 1
iKey = 0
iVelocity = 0

midinoteonkey iKey, iVelocity

SLine sprintf "i 1 0 -1 %d %d %d %d\n", iProgram, iChannel, iKey, iVelocity

schedule "write", 0, 0, SLine

kReleased release

cggoto kReleased != 1, end

schedulek "write", 0, 0, "i -1 0 0\n"

end:

endin

instr write

SLine strget p4

fprints "oscilla.in", SLine

endin

</CsInstruments>

<CsScore>
</CsScore>

</CsoundSynthesizer>
