instr oscillator

iWaveFT vco2ift p4, 4

aEnvelope subinstr "plug", p1

aSound poscil aEnvelope * p5 * .5 / 127, p4, iWaveFT

out aSound

endin

instr adsr

aADSR madsr .01, .01, .5, .2
aEnvelope jspline aADSR, 2, 20

out aEnvelope

endin
