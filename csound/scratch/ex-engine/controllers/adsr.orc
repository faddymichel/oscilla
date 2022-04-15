instr cADSR

tigoto performance

$controllerNote

iAttack oParameter_i "attack"
iDecay oParameter_i "decay"
iSustain oParameter_i "sustain"
iRelease oParameter_i "release"

performance:

aEnvelope madsr iAttack, iDecay, iSustain, iRelease

oControl_a aEnvelope, iRelease

endin
