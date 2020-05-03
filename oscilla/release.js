export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function release ( note, legato, partials ) {

const oscilla = this;

if ( !oscilla .key [ Math .abs ( note ) ] )
return;

partials .forEach ( ( symbol ) => {

const partial = oscilla .key [ note ] [ symbol ];

partial .amplifier .offset
.cancelScheduledValues (
oscilla .currentTime + oscilla .releaseTime
);

partial .amplifier .offset
.linearRampToValueAtTime (
oscilla [ symbol ] .loudness * oscilla .sustain,
oscilla .currentTime
);

partial .amplifier .offset
.linearRampToValueAtTime (
0,
oscilla .currentTime + oscilla .releaseTime
);

partial .pitch
.stop (
oscilla .currentTime + oscilla .releaseTime
);

partial .modulator
.stop (
oscilla .currentTime + oscilla .releaseTime
);

} );

oscilla .key [ note ] .attacked = false;

};
