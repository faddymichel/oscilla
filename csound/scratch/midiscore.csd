<CsoundSynthesizer>

<CsOptions>

-T
-F test.midi
-n

</CsOptions>

<CsInstruments>

sr = 44100
ksmps = 10
nchnls = 1

gSScore = ""
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

;print iSamples
print iCycles
print giStart
print iTime

iProgram init 0

;midiprogramchange iProgram

;iChannel midichn
iChannel init 1

iKey init 0
iVelocity init 0

midinoteonkey iKey, iVelocity

kReleased release

cggoto kReleased != 1, end

kDurationCycles timeinstk
kDuration = ( kDurationCycles - 1 ) / kr
;kDurationSamples = int ( kDuration * ksmps )
;kDuration = kDurationSamples / ksmps

printf "k Duration Cycles: %f, Time: %f", 1, kDurationCycles, kDuration

SLine sprintfk "i \"oscilla\" %f %f %d %d %d %d\n", iTime, kDuration, iProgram, iChannel, iKey, iVelocity

schedulek "write", 0, 0, SLine

end:

endin

instr write

SLine strget p4

fprints "out.sco", SLine

endin

</CsInstruments>

<CsScore>
</CsScore>

</CsoundSynthesizer>
