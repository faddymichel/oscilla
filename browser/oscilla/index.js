import { descriptor as tune } from './tune.js';
import { descriptor as pitch } from './pitch.js';

export const Oscilla = function Oscilla () {

const oscilla = this;

Object .defineProperty ( oscilla, 'context', {

value: new ( window .AudioContext || window .WebkitAudioContext ) ()

} );

};

Oscilla .prototype .loudness = .3;
Oscilla .prototype .attack = .1;
Oscilla .prototype .decay = .1;
Oscilla .prototype .sustain = .1;
Oscilla .prototype .release = .1;

Object .defineProperty ( Oscilla .prototype, 'tune', tune );
Object .defineProperty ( Oscilla .prototype, 'pitch', pitch );
