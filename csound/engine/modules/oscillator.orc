instr mOscillator

$note

cggoto iOutputChannel > 0, input

aInput oInput

aEnvelope oController_a "envelope"
iFrequency = cpsmidinn ( iKey )
aWave poscil aEnvelope, iFrequency

aOutput = aWave + aInput

goto plug

input:

aOutput oInput 0

plug:

oPlug aOutput

endin
