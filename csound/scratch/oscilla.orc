sr = 44100
ksmps = 32
nchnls = 2
0dbfs = 1

giNextFT vco2init 31, 100

instr 1

iWave = 0
kFrequency init 440
kAmplitude init 1/3

kWaveFT vco2ft kFrequency, iWave

aNote oscilikt kAmplitude, kFrequency, kWaveFT

outs aNote, aNote

endin
