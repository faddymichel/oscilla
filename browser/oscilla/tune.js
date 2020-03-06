export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function tune ( note, partials ) {

const oscilla = this;

partials .forEach ( ( partial ) => {

oscilla .key [ note ] [ partial ] = {};

oscilla .key [ note ] [ partial ]
.amplifier = oscilla .createGain ();

oscilla .key [ note ] [ partial ]
.amplifier
.gain .value = 0;

oscilla .key [ note ] [ partial ]
.oscillator = oscilla .createOscillator ();

oscilla .key [ note ] [ partial ]
.oscillator
.type = oscilla [ partial ] .wave;

oscilla .key [ note ] [ partial ]
.oscillator
.frequency .value = oscilla .key [ note ] .frequency;

oscilla .key [ note ] [ partial ]
.oscillator
.detune .value = parseInt ( oscilla [ partial ] .detune * 100 * oscilla .steps );

oscilla .addEventListener ( 'octave', ( event ) => {

if ( event .detail === partial )
oscilla .key [ note ] [ partial ]
.oscillator
.detune
.setValueAtTime (
parseInt ( oscilla [ partial ] .detune * 100 * oscilla .steps ),
oscilla .currentTime
);

}, false );

oscilla .addEventListener ( 'wave', ( event ) => {

if ( event .detail === partial )
oscilla .key [ note ] [ partial ]
.oscillator
.type = oscilla [ partial ] .wave;

}, false );

oscilla .key [ note ] [ partial ]
.oscillator
.connect (
oscilla .key [ note ] [ partial ]
.amplifier
) .connect (
oscilla .destination
);

oscilla .key [ note ] [ partial ]
.oscillator
.start ();

} );

};
