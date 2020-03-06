export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function release ( note, ... partials ) {

const oscilla = this;

if ( !oscilla .key [ Math .abs ( note ) ] )
return;

partials .forEach ( ( partial ) => {

oscilla .key [ note ] [ partial ]
.amplifier
.gain
.cancelScheduledValues (
oscilla .currentTime + oscilla .releaseTime
);

oscilla .key [ note ] [ partial ]
.amplifier
.gain
.linearRampToValueAtTime (
oscilla [ partial ] .loudness * oscilla .sustain,
oscilla .currentTime
);

oscilla .key [ note ] [ partial ]
.amplifier
.gain
.linearRampToValueAtTime (
0,
oscilla .currentTime + oscilla .releaseTime
);

oscilla .key [ note ] [ partial ]
.oscillator
.stop (
oscilla .currentTime + oscilla .releaseTime
);

} );

};
