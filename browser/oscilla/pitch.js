export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function pitch ( note ) {

const { context, loudness, key, attack, decay, sustain, release } = this;

if ( !key [ Math .abs ( note ) ] )
return;

if ( note > 0 ) {

key [ note ]
.amplifier
.gain
.cancelScheduledValues (
context .currentTime + release
);

key [ note ]
.amplifier
.gain
.linearRampToValueAtTime (
0,
context .currentTime
);

key [ note ]
.amplifier
.gain
.linearRampToValueAtTime (
loudness,
context .currentTime + attack
);

key [ note ]
.amplifier
.gain
.linearRampToValueAtTime (
sustain,
context .currentTime + attack + decay
);

} else {

key [ -note ]
.amplifier
.gain
.cancelScheduledValues (
context .currentTime + release
);

key [ -note ]
.amplifier
.gain
.linearRampToValueAtTime (
sustain,
context .currentTime
);

key [ -note ]
.amplifier
.gain
.linearRampToValueAtTime (
0,
context .currentTime + release
);

}

};
