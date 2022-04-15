<CsoundSynthesizer>

<CsOptions>

-T
-n

</CsOptions>

<CsInstruments>

giSelected [] init 127

instr 1

iProgram = -1

midiprogramchange iProgram

if iProgram > -1 && giSelected [ iProgram ] == 0 then

giSelected [ iProgram ] = 1
fprints "programs.txt", "%d\n", iProgram
endif

endin

</CsInstruments>

<CsScore>
</CsScore>

</CsoundSynthesizer>
