export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function release ( note, legato ) {

const oscilla = this;

if ( !oscilla .key [ note ] )
return;

for ( const partial of oscilla .partials ) {

partial [ note ] .amplifier .offset
.cancelScheduledValues (
oscilla .currentTime + partial .attributes .release .value
);

partial [ note ] .amplifier .offset
.linearRampToValueAtTime (
partial .attributes .loudness .value * partial .attributes .sustain .value,
oscilla .currentTime
);

partial [ note ] .amplifier .offset
.linearRampToValueAtTime (
0,
oscilla .currentTime + partial .attributes .release .value
);

partial [ note ] .pitch
.stop (
oscilla .currentTime + partial .attributes .release .value
);

partial [ note ] .modulator
.stop (
oscilla .currentTime + partial .attributes .release .value
);

}

oscilla .key [ note ] .attacked = false;

};
