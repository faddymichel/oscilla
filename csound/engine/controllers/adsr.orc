instr cADSR

iAttack oParameter_i "attack"
iDecay oParameter_i "decay"
iSustain oParameter_i "sustain"
iRelease oParameter_i "release"

aEnvelope madsr iAttack, iDecay, iSustain, iRelease

oControl_a aEnvelope

endin
