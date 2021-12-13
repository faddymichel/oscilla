instr mOscillator

$note

cggoto iOutputChannel > 0, input

aInput oInput

iFrequency = cpsmidinn ( iKey )
aWave poscil .3, iFrequency

aOutput = aWave + aInput

goto plug

input:

aOutput oInput 0

plug:

oPlug aOutput

endin
