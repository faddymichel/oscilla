export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function tune ( note, partials ) {

const oscilla = this;

partials .forEach ( ( symbol ) => {

const partial = oscilla .key [ note ] [ symbol ] = oscilla .key .legato [ symbol ] = {};

partial .pitch = oscilla .createOscillator ();
partial .pitchAmplifier = oscilla .createGain ();

partial .modulator = oscilla .createOscillator ();
partial .modulatorAmplifier = oscilla .createGain ();

partial .amplifier = oscilla .createConstantSource ();

partial .pitchAmplifier .gain .value
= partial .modulatorAmplifier .gain .value
= 0;

partial .pitch .type = oscilla [ symbol ] .wave;
partial .pitch .frequency .value = oscilla .key [ note ] .frequency;

let cents = parseInt ( oscilla [ symbol ] .detune * 100 * oscilla .steps );

if ( cents === 0 ) {

cents = -partial .pitch .detune .value;

}

partial .pitch .detune .value = cents;

oscilla .addEventListener ( 'octave', ( event ) => {

if ( event .detail === partial )
partial .pitch .detune
.setValueAtTime (
parseInt ( oscilla [ symbol ] .detune * 100 * oscilla .steps ),
oscilla .currentTime
);

}, false );

oscilla .addEventListener ( 'modulation', ( event ) => {

if ( event .detail === partial )
partial .modulator .frequency
.setValueAtTime (
oscilla [ symbol ] .modulation,
oscilla .currentTime
);

}, false );

oscilla .addEventListener ( 'wave', ( event ) => {

if ( event .detail === partial )
partial .pitch .type = oscilla [ symbol ] .wave;

}, false );

partial .modulator .frequency .value = oscilla [ symbol ] .modulation;

partial .amplifier .offset .value = 0;

partial .amplifier .connect (
partial .pitchAmplifier .gain
);

partial .amplifier .connect (
partial .modulatorAmplifier .gain
);

partial .modulator .connect (
partial .modulatorAmplifier
);

partial .modulatorAmplifier .connect (
partial .pitchAmplifier .gain
);

partial .pitch .connect (
partial .pitchAmplifier
) .connect (
oscilla .destination
);

partial .amplifier .start ();
partial .modulator .start ();
partial .pitch .start ();

} );

oscilla .key [ note ] .attacked = true;

};
