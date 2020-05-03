export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function attack ( note, legato, partials ) {

const oscilla = this;

if ( !oscilla .key [ note ] || oscilla .key [ note ] .attacked )
return;

oscilla .tune ( note, partials );

partials .forEach ( ( symbol ) => {

const partial = legato ? oscilla .key [ note ] [ symbol ] : oscilla .key .legato [ symbol ];

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
