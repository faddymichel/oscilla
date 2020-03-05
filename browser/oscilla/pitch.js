export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function pitch ( note ) {

const oscilla = this;

if ( !oscilla .key [ Math .abs ( note ) ] )
return;

if ( note > 0 ) {

oscilla .tune ( note );

oscilla .key [ note ]
.amplifier
.gain
.cancelScheduledValues (
oscilla .currentTime + oscilla .release
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
oscilla .currentTime + oscilla .attack
);

oscilla .key [ note ]
.amplifier
.gain
.linearRampToValueAtTime (
oscilla .sustain,
oscilla .currentTime + oscilla .attack + oscilla .decay
);

} else {

oscilla .key [ -note ]
.amplifier
.gain
.cancelScheduledValues (
oscilla .currentTime + oscilla .release
);

oscilla .key [ -note ]
.amplifier
.gain
.linearRampToValueAtTime (
oscilla .sustain,
oscilla .currentTime
);

oscilla .key [ -note ]
.amplifier
.gain
.linearRampToValueAtTime (
0,
oscilla .currentTime + oscilla .release
);

}

};
