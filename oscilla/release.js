export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function release ( note, legato ) {

const oscilla = this;

if ( !oscilla .key [ note ] )
return;

for ( const partial of oscilla .partials ) {

partial [ note ] .amplifier .offset
.cancelScheduledValues (
oscilla .currentTime + oscilla .releaseTime
);

partial [ note ] .amplifier .offset
.linearRampToValueAtTime (
partial .attributes .loudness .value * oscilla .sustain,
oscilla .currentTime
);

partial [ note ] .amplifier .offset
.linearRampToValueAtTime (
0,
oscilla .currentTime + oscilla .releaseTime
);

partial [ note ] .pitch
.stop (
oscilla .currentTime + oscilla .releaseTime
);

partial [ note ] .modulator
.stop (
oscilla .currentTime + oscilla .releaseTime
);

}

oscilla .key [ note ] .attacked = false;

};
