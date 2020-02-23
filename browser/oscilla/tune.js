export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function tune ( tuning ) {

const oscilla = this;

oscilla .oscillator = {};
oscilla .amplifier = {};

for (
let first = tuning .frequency / 2 ** ( tuning .pitch / tuning .steps ),
i = 1;
i <= tuning .steps;
i++
) {

const frequency = first * 2 ** ( i / tuning .steps );

oscilla .amplifier [ i ] = oscilla .context .createGain ();
oscilla .amplifier [ i ]
.gain
.setValueAtTime (
0,
oscilla .context .currentTime
);

oscilla .oscillator [ i ] = oscilla .context .createOscillator ();
oscilla .oscillator [ i ]
.frequency
.setValueAtTime (
frequency,
oscilla .context .currentTime
);

oscilla .oscillator [ i ]
.connect (
oscilla .amplifier [ i ]
) .connect (
oscilla .context .destination
);

oscilla
.oscillator [ i ]
.start ();

}

};
