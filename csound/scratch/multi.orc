sr = 44100
ksmps = 32
nchnls = 2
0dbfs = 1

instr 1

Score = p4

scoreline_i Score

endin

instr 2

aNote poscil .1, 440

outs aNote, aNote

endin
