function synthesizer () {

const oscillator = new OscillatorNode ();
const amplifier = new GainNode ();

oscillator .connect ( amplifier );
amplifier .connect ( graph .destination );

};
