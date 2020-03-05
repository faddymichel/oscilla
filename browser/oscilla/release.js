export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function release ( note ) {

const oscilla = this;

if ( !oscilla .key [ Math .abs ( note ) ] )
return;

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
oscilla .sustain,
oscilla .currentTime
);

oscilla .key [ note ]
.amplifier
.gain
.linearRampToValueAtTime (
0,
oscilla .currentTime + oscilla .releaseTime
);

oscilla .key [ note ]
.oscillator
.stop (
oscilla .currentTime + oscilla .releaseTime
);

};
