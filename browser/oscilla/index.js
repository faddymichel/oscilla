export const Oscilla = function Oscilla () {

const oscilla = this;

Object .defineProperty ( oscilla, 'context', {

value: new ( window .AudioContext || window .WebkitAudioContext ) ()

} );

[

'tune',
'pitch'

] .forEach ( ( property, index, imports ) => {

import ( `./${ property }.js` ) .then ( ( { descriptor } ) => {

Object .defineProperty ( Oscilla .prototype, property, descriptor );

if ( index === imports .length - 1 ) {

oscilla .tune ( {

frequency: 440,
pitch: 10,
steps: 12

} );

}

} );

} );

};

Oscilla .prototype .loudness = .5;
Oscilla .prototype .attack = .1;
Oscilla .prototype .decay = .1;
Oscilla .prototype .sustain = .25;
Oscilla .prototype .release = .1;
