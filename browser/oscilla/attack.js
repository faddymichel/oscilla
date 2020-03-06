export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function attack ( note, partials ) {

const oscilla = this;

if ( !oscilla .key [ Math .abs ( note ) ] )
return;

oscilla .tune ( note, partials );

partials .forEach ( ( partial ) => {

oscilla .key [ note ] [ partial ]
.amplifier
.gain
.linearRampToValueAtTime (
oscilla [ partial ] .loudness,
oscilla .currentTime + oscilla .attackTime
);

oscilla .key [ note ] [ partial ]
.amplifier
.gain
.linearRampToValueAtTime (
oscilla [ partial ] .loudness * oscilla .sustain,
oscilla .currentTime + oscilla .attackTime + oscilla .decayTime
);

} );

};
