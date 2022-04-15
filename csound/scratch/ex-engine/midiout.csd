<CsoundSynthesizer>


<CsOptions>

-n
--midioutfile=otest.midi

</CsOptions>


<CsInstruments>

instr NoteOff, 128

noteoff p4, p5, p6

endin


instr 144, NoteOn

noteon p4, p5, p6

endin


instr PolyphonicAfterTouch, 160

endin


instr 176, ControlChange

outkc p4, p5, p6, p7, p8

endin


instr ProgramChange, 192

endin


instr ChannelAfterTouch, 208

endin


instr PitchBend, 224

endin


</CsInstruments>


<CsScore>

i 144 0 1 13 69 63
i 128 1 0 13 69 0

i 144 .5 .5 13 60 63
i 128 1 0 13 60 0

i "ControlChange" 0 .1 13 103 .13 0 1
i . +
i . +
i . +
i . +
i . +
i . +
i . +
i . +
i . +

</CsScore>

</CsoundSynthesizer>
