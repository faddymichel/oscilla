export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function tune ( tuning ) {

const oscilla = this;

oscilla .oscillators = {};
oscilla .amplifiers = {};
oscilla .steps = tuning .steps;

for (
let first = tuning .frequency * 2 ** ( -tuning .pitch / tuning .steps ),
i = 1;
i <= tuning .keys;
i++
) {

const frequency = first * 2 ** ( i / tuning .steps );

oscilla .amplifiers [ i ] = oscilla .context .createGain ();
oscilla .amplifiers [ i ]
.gain
.setValueAtTime (
0,
oscilla .context .currentTime
);

oscilla .oscillators [ i ] = oscilla .context .createOscillator ();
oscilla .oscillators [ i ]
.frequency
.setValueAtTime (
frequency,
oscilla .context .currentTime
);

oscilla .oscillators [ i ]
.connect (
oscilla .amplifiers [ i ]
) .connect (
oscilla .context .destination
);

oscilla
.oscillators [ i ]
.start ();

}

};
