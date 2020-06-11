export const Partial = class Partial extends EventTarget {

constructor ( octave ) {

super ();

const partial = this;
const defaults = partial .attributes;

defaults .detune = {

min: octave .min,
max: octave .max,
coefficient: 1,
offset: octave .value

};

}

};

const defaults = Partial .prototype .attributes = {};

defaults .wave = 'sawtooth';

[

'loudness', 'attack', 'decay', 'sustain', 'release',
'amFrequency', 'amAttack', 'amDecay', 'amSustain', 'amRelease',
'fmFrequency', 'fmAttack', 'fmDecay', 'fmSustain', 'fmRelease'

] .forEach ( ( name ) => {

defaults [ name ] = {};

defaults [ name ] .min = 0;
defaults [ name ] .max = 127;
defaults [ name ] .coefficient = 1 / 127;

} );

for ( const event of [

'wave',
'detune'

] ) {

Object .defineProperty ( Partial .prototype, 'on' + event .toLowerCase (), {

enumerable: true,
set: function set ( listener ) {

const partial = this;

partial .addEventListener ( event, listener, false );

}

} );

}
