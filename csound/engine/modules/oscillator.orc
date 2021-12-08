instr mOscillator

$note

aInput oInput

/*
aAmplitude oController_a "amplitude"
aFrequency oController_a "frequency"
kWaveTable oController_k "waveTable"
*/

;aWave oscilikt aAmplitude, aFrequency, kWaveTable

iFrequency = cpsmidinn ( iKey )
aWave poscil .3, iFrequency

aOutput = aWave + aInput

oPlug aOutput

endin
