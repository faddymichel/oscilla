<CsoundSynthesizer>

<CsOptions>

-odac

</CsOptions>

<CsInstruments>

sr = 44100
ksmps = 32
nchnls = 2
0dbfs = 1

instr 1

aOutput [] init nchnls

chnset aOutput, "output"

aNote poscil .3, 440

aOutput [ 0 ] = aNote
aOutput [ 1 ] = aNote

endin

instr 2

aOutput [] chnget "output"

out aOutput

endin

</CsInstruments>

<CsScore>

i 1 0 1
i 2 0 1

</CsScore>
</CsoundSynthesizer>
