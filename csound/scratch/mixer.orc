sr = 44100
ksmps = 32
nchnls = 2
0dbfs = 1

instr 1

aNote poscil .3, 440

chnset aNote, "note"

endin

instr 2

aNote chnget "note"

outs aNote, aNote

endin
