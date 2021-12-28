instr oscillator

iVersion = p6

iWaveFT vco2ift p4, iVersion
aEnvelope plug
;aEnvelope subinstr 101

aSound poscil aEnvelope * p5 * .25 / 127, p4 * ( iVersion + 1 ), iWaveFT

out aSound

endin

instr adsr

aEnvelope madsr .01, .1, .5, .1

out aEnvelope

endin
