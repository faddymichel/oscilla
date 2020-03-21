export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function attack ( note, partials ) {

const oscilla = this;

if ( !oscilla .key [ Math .abs ( note ) ] )
return;

oscilla .tune ( note, partials );

partials .forEach ( ( symbol ) => {

const partial = oscilla .key [ note ] [ symbol ];

partial .amplifier .offset
.linearRampToValueAtTime (
oscilla [ symbol ] .loudness,
oscilla .currentTime + oscilla .attackTime
);

partial .amplifier .offset
.linearRampToValueAtTime (
oscilla [ symbol ] .loudness * oscilla .sustain,
oscilla .currentTime + oscilla .attackTime + oscilla .decayTime
);

} );

};
