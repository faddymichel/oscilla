export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function pitch ( note ) {

const { context, loudness, amplifier, attack, decay, sustain, release } = this;

console .log ( attack, decay, sustain, release );

if ( !amplifier [ Math .abs ( note ) ] )
return;

if ( note > 0 ) {

amplifier [ note ]
.gain
.cancelScheduledValues (
context .currentTime + release
);

amplifier [ note ]
.gain
.linearRampToValueAtTime (
0,
context .currentTime
);

amplifier [ note ]
.gain
.linearRampToValueAtTime (
loudness,
context .currentTime + attack
);

amplifier [ note ]
.gain
.linearRampToValueAtTime (
sustain,
context .currentTime + attack + decay
);

} else {

amplifier [ -note ]
.gain
.cancelScheduledValues (
context .currentTime + release
);

amplifier [ -note ]
.gain
.linearRampToValueAtTime (
sustain,
context .currentTime
);

amplifier [ -note ]
.gain
.linearRampToValueAtTime (
0,
context .currentTime + release
);

}

};
