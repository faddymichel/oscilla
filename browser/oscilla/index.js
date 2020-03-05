import { descriptor as tune } from './tune.js';
import { descriptor as attack } from './attack.js';
import { descriptor as release } from './release.js';
import { descriptor as loudness } from './loudness.js';
import { Descriptor as Wave } from './wave.js';
import { Descriptor as Octave } from './octave.js';

const Context = window .AudioContext || window .WebkitAudioContext;

export const Oscilla = class Oscilla  extends Context {

constructor ( tuning ) {

super ();

const oscilla = this;

//Object .defineProperty ( oscilla, 'wave', Wave () );
Object .defineProperty ( oscilla, 'octave', Octave () );

oscilla .loudness = .3;
oscilla .attackTime = 0;
oscilla .decayTime = 0;
oscilla .sustain = .15;
oscilla .releaseTime = 0;

oscilla .key = {};
oscilla .steps = tuning .steps;

for (
let first = tuning .frequency * 2 ** ( -tuning .pitch / tuning .steps ),
note = 1;
note <= tuning .keys;
note++
) {

oscilla .key [ note ] = {};
oscilla .key [ note ]
.frequency = first * 2 ** ( note / tuning .steps );

}

}

};

Object .defineProperty ( Oscilla .prototype, 'tune', tune );
Object .defineProperty ( Oscilla .prototype, 'attack', attack );
Object .defineProperty ( Oscilla .prototype, 'release', release );
