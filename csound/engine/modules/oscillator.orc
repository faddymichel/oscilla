instr mOscillator

tigoto performance

$note

aInput oInput

aEnvelope oController_a "envelope"
iFrequency = cpsmidinn ( iKey )
iWaveFT vco2ift iFrequency, 0

performance:

aWave poscil aEnvelope, iFrequency, -1, -1
;, iWaveFT

aOutput = aWave + aInput

oPlug aOutput

endin
