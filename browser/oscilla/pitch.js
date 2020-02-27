export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function pitch ( note ) {

const { context, loudness, amplifiers, attack, decay, sustain, release } = this;

console .log ( attack, decay, sustain, release );
console .log ( 'loudness:', loudness );

if ( !amplifiers [ Math .abs ( note ) ] )
return;

if ( note > 0 ) {

amplifiers [ note ]
.gain
.cancelScheduledValues (
context .currentTime + release
);

amplifiers [ note ]
.gain
.linearRampToValueAtTime (
0,
context .currentTime
);

amplifiers [ note ]
.gain
.linearRampToValueAtTime (
loudness,
context .currentTime + attack
);

amplifiers [ note ]
.gain
.linearRampToValueAtTime (
sustain,
context .currentTime + attack + decay
);

} else {

amplifiers [ -note ]
.gain
.cancelScheduledValues (
context .currentTime + release
);

amplifiers [ -note ]
.gain
.linearRampToValueAtTime (
sustain,
context .currentTime
);

amplifiers [ -note ]
.gain
.linearRampToValueAtTime (
0,
context .currentTime + release
);

}

};
