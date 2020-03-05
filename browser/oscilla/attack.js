export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function attack ( note ) {

const oscilla = this;

if ( !oscilla .key [ Math .abs ( note ) ] )
return;

oscilla .tune ( note );

oscilla .key [ note ]
.amplifier
.gain
.cancelScheduledValues (
oscilla .currentTime + oscilla .releaseTime
);

oscilla .key [ note ]
.amplifier
.gain
.linearRampToValueAtTime (
0,
oscilla .currentTime
);

oscilla .key [ note ]
.amplifier
.gain
.linearRampToValueAtTime (
oscilla .loudness,
oscilla .currentTime + oscilla .attackTime
);

oscilla .key [ note ]
.amplifier
.gain
.linearRampToValueAtTime (
oscilla .sustain,
oscilla .currentTime + oscilla .attackTime + oscilla .decayTime
);

};
