import { descriptor as partial } from './partial.js';
import { descriptor as tune } from './tune.js';
import { descriptor as attack } from './attack.js';
import { descriptor as release } from './release.js';
import { descriptor as modulation } from './modulation.js';
import { descriptor as loudness } from './loudness.js';
import { descriptor as wave } from './wave.js';
import { descriptor as detune } from './detune.js';

const Context = window .AudioContext || window .WebkitAudioContext;

export const Oscilla = class Oscilla  extends Context {

constructor ( tuning ) {

super ();

const oscilla = this;

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

Object .defineProperty ( Oscilla .prototype, 'partial', partial );
Object .defineProperty ( Oscilla .prototype, 'modulation', modulation );
Object .defineProperty ( Oscilla .prototype, 'loudness', loudness );
Object .defineProperty ( Oscilla .prototype, 'tune', tune );
Object .defineProperty ( Oscilla .prototype, 'detune', detune );
Object .defineProperty ( Oscilla .prototype, 'wave', wave );
Object .defineProperty ( Oscilla .prototype, 'attack', attack );
Object .defineProperty ( Oscilla .prototype, 'release', release );
