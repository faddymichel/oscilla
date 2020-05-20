export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function tune ( note ) {

const oscilla = this;

for ( const partial of oscilla .partials ) {

partial [ note ] = {};

partial [ note ] .pitch = partial [ note ] .pitch || oscilla .createOscillator ();
partial [ note ] .pitchAmplifier = partial [ note ] .pitchAmplifier || oscilla .createGain ();

partial [ note ] .modulator = partial [ note ] .modulator || oscilla .createOscillator ();
partial [ note ] .modulatorAmplifier = partial [ note ] .modulatorAmplifier || oscilla .createGain ();

partial [ note ] .amplifier = partial [ note ] .amplifier || oscilla .createConstantSource ();

partial [ note ] .pitchAmplifier .gain .value
= partial [ note ] .modulatorAmplifier .gain .value
= 0;

partial [ note ] .pitch .type = partial .attributes .wave;
partial [ note ] .pitch .frequency .value = oscilla .key [ note ] .frequency;

let cents = parseInt ( partial .attributes .detune .value * 100 * oscilla .steps );

if ( cents === 0 )
cents = -partial [ note ] .pitch .detune .value;

partial [ note ] .pitch .detune .value = cents;

partial .ondetune = ( event ) => {

if ( event .detail === partial )
partial [ note ] .pitch .detune
.linearRampToValueAtTime (
parseInt ( partial .attributes .detune .value * 100 * oscilla .steps ),
oscilla .currentTime + partial .attributes .attack .value
);

};

oscilla .addEventListener ( 'modulation', ( event ) => {

if ( event .detail === partial )
partial .modulator .frequency
.setValueAtTime (
partial .attributes .modulation,
oscilla .currentTime
);

}, false );

partial .onwave = ( event ) => {

if ( event .detail === partial )
partial [ note ] .pitch .type = partial .attributes .wave;

};

partial [ note ] .modulator .frequency .value = partial .attributes .modulation;

partial [ note ] .amplifier .offset .value = 0;

partial [ note ] .amplifier .connect (
partial [ note ] .pitchAmplifier .gain
);

partial [ note ] .amplifier .connect (
partial [ note ] .modulatorAmplifier .gain
);

partial [ note ] .modulator .connect (
partial [ note ] .modulatorAmplifier
);

partial [ note ] .modulatorAmplifier .connect (
partial [ note ] .pitchAmplifier .gain
);

partial [ note ] .pitch .connect (
partial [ note ] .pitchAmplifier
) .connect (
oscilla .destination
);

partial [ note ] .amplifier .start ();
partial [ note ] .modulator .start ();
partial [ note ] .pitch .start ();

}

};
