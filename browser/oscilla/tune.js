export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function tune ( note ) {

const oscilla = this;

oscilla .key [ note ]
.amplifier = oscilla .createGain ();

oscilla .key [ note ]
.amplifier
.gain .value = 0;

oscilla .key [ note ]
.oscillator = oscilla .createOscillator ();

oscilla .key [ note ]
.oscillator
.frequency .value = oscilla .key [ note ] .frequency;

oscilla .key [ note ]
.oscillator
.detune .value = parseInt ( oscilla .octave * 100 * oscilla .steps );

oscilla .addEventListener ( 'octave', () => {

console .log ( 'octave' );

oscilla .key [ note ]
.oscillator
.detune
.setValueAtTime (
parseInt ( oscilla .octave * 100 * oscilla .steps ),
oscilla .currentTime
);

}, false );

oscilla .key [ note ]
.oscillator
.connect (
oscilla .key [ note ]
.amplifier
) .connect (
oscilla .destination
);

oscilla .key [ note ]
.oscillator
.start ();

};
