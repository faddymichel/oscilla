<CsoundSynthesizer>

<CsOptions>

-odac

</CsOptions>

<CsInstruments>

sr = 44100
ksmps = 32
nchnls = 1
0dbfs = 1

instr 1

aOut poscil .3, p4

out aOut

endin

instr 2

kKey sense

printk2 kKey

if kKey == 10 then

rewindscore

elseif kKey > -1 then

schedulek 1, 0, 1/2, 440

endif

endin

</CsInstruments>

<CsScore>

f 0 1000000

i 2 0 -1

</CsScore>

</CsoundSynthesizer>
