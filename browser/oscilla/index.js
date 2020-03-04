import { descriptor as tune } from './tune.js';
import { descriptor as pitch } from './pitch.js';
import { descriptor as loudness } from './loudness.js';
import { Descriptor as Wave } from './wave.js';
import { Descriptor as Octave } from './octave.js';

const context = new ( window .AudioContext || window .WebkitAudioContext ) ();
export const Oscilla = function Oscilla () {

const oscilla = this;

Object .defineProperty ( oscilla, 'context', {

value: context

} );

Object .defineProperty ( oscilla, 'wave', Wave () );
Object .defineProperty ( oscilla, 'octave', Octave () );

};

Oscilla .prototype .attack = 0;
Oscilla .prototype .decay = 0;
Oscilla .prototype .sustain = .1;
Oscilla .prototype .release = 0;

Object .defineProperty ( Oscilla .prototype, 'tune', tune );
Object .defineProperty ( Oscilla .prototype, 'pitch', pitch );
Object .defineProperty ( Oscilla .prototype, 'loudness', loudness );
