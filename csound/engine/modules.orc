instr oscillator

iWaveFT vco2ift p4, 3
aEnvelope plug
;aEnvelope subinstr 101

aSound poscil aEnvelope * p5 * .25 / 127, p4;, iWaveFT

out aSound

endin

instr adsr

aEnvelope madsr .01, .1, .5, .1

out aEnvelope

endin
