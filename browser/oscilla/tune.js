export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function tune ( tuning ) {

const oscilla = this;

oscilla .key = {};
oscilla .steps = tuning .steps;

for (
let first = tuning .frequency * 2 ** ( -tuning .pitch / tuning .steps ),
note = 1;
note <= tuning .keys;
note++
) {

const frequency = first * 2 ** ( note / tuning .steps );

oscilla .key [ note ] = {};

oscilla .key [ note ]
.amplifier = oscilla .context .createGain ();

oscilla .key [ note ]
.amplifier
.gain
.setValueAtTime (
0,
oscilla .context .currentTime
);

oscilla .key [ note ]
.oscillator = oscilla .context .createOscillator ();

oscilla .key [ note ]
.oscillator
.frequency
.setValueAtTime (
frequency,
oscilla .context .currentTime
);

oscilla .key [ note ]
.oscillator
.connect (
oscilla .key [ note ]
.amplifier
) .connect (
oscilla .context .destination
);

oscilla .key [ note ]
.oscillator
.start ();

}

};
