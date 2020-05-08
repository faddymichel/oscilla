export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function attack ( note, legato ) {

const oscilla = this;

if ( !oscilla .key [ note ] || oscilla .key [ note ] .attacked )
return;

oscilla .tune ( note );

for ( const partial of oscilla .partials ) {

partial [ note ] .amplifier .offset
.linearRampToValueAtTime (
partial .attributes .loudness .value,
oscilla .currentTime + oscilla .attackTime
);

partial [ note ] .amplifier .offset
.linearRampToValueAtTime (
partial .attributes .loudness .value * oscilla .sustain,
oscilla .currentTime + oscilla .attackTime + oscilla .decayTime
);

}

oscilla .key [ note ] .attacked = true;

};
