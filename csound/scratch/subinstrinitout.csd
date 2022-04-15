<CsoundSynthesizer>

<CsOptions>

-T
-F test.midi
-odac

</CsOptions>

<CsInstruments>

sr = 44100
ksmps = 32
nchnls = 2
0dbfs = 1

opcode output, 0, iip

iFrequency, iVelocity, iOutputChannel xin

aOutput subinstr "out", iOutputChannel, iFrequency, iVelocity

outch iOutputChannel, aOutput

if iOutputChannel <= nchnls then

output iFrequency, iVelocity, iOutputChannel + 1

endif

endop

instr 1

iFrequency = 0
iVelocity = 0

midinoteoncps iFrequency, iVelocity

output iFrequency, iVelocity

endin

instr out

iOutputChannel = p4
iFrequency = p5
iVelocity = p6

aOutput poscil iVelocity / 127 * .3, iFrequency

out aOutput

endin

</CsInstruments>

<CsScore>
</CsScore>

</CsoundSynthesizer>
