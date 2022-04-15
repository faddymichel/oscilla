<CsoundSynthesizer>

<CsOptions>

-n

</CsOptions>

<CsInstruments>

#define print #prints "Compiled Orchestra file successfully...\n"#

iCompiled compileorc "test.orc"

/*
if iCompiled == -1 then

prints "Exiting as Orchestra failed to be compiled...\n"

exitnow -1

endif
*/
</CsInstruments>

<CsScore>
</CsScore>

</CsoundSynthesizer>
