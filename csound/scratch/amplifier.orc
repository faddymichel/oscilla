sr = 44100
ksmps = 32
nchnls = 2
0dbfs = 1

opcode opart

SPart, aOutput xin

SPartDestination strcat SPart, "-destination"
SDestination chnget SPartDestination
SDestinationInput strcat SDestination, "-input"

chnset aOutput, SDestinationInput

event_i "i", SDestination, p2, p3

endop

chnset "wave", "1-destination"

instr 1

SDestination chnget "1-destination"

event_i "i", SDestination, p2, p3

endin

chnset "amplifier", "wave-destination"

instr wave

aOutput poscil .3, 440

SDestination chnget "wave-destination"
SDestinationInput strcat SDestination, "-input"

chnset aOutput, SDestinationInput

event_i "i", SDestination, p2, p3

endin

chnset "destination", "amplifier-destination"

instr amplifier

aInput chnget "amplifier-input"

aEnvelope madsr .5, .2, .3, .2

aOutput = aInput * aEnvelope

SDestination chnget "amplifier-destination"
SDestinationInput strcat SDestination, "-input"

chnset aOutput, SDestinationInput

event_i "i", SDestination, p2, p3

endin

instr destination

aNote chnget "destination-input"

outs aNote, aNote

endin
