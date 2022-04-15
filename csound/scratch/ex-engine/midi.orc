sr = 44100
ksmps = 32
nchnls = 2
0dbfs = 1

iChannel = 1

while iChannel <= 16 do

massign iChannel, "midi"

iChannel += 1

od


instr midi

iChannel midichn

iKey = 0
iVelocity = 0

midinoteonkey iKey, iVelocity

print iKey
print iVelocity

iInstance = 1 + iChannel / 1000

schedule iInstance, 0, -1, iKey, iVelocity

print iInstance

kReleased release

if kReleased == 1 then

event "d", -iInstance, 0, 1

endif

endin

instr 1

iP [] passign
iLength lenarray iP

print iLength

if iLength == 3 then

prints "turning off\n"

turnoff

endif

iFrequency = cpsmidinn ( p4 )
iAmplitude = p5 / 127

print iAmplitude
print iFrequency

aOutput poscil iAmplitude, iFrequency

out aOutput, aOutput

endin
