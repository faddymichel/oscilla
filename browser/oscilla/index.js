import { descriptor as tune } from './tune.js';
import { descriptor as pitch } from './pitch.js';

export const Oscilla = function Oscilla () {

const oscilla = this;

Object .defineProperty ( oscilla, 'context', {

value: new ( window .AudioContext || window .WebkitAudioContext ) ()

} );

<<<<<<< HEAD
=======
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

>>>>>>> 53d5e0edb68445db674485fbb3a0a4bf32c82a45
};

Oscilla .prototype .loudness = .3;
Oscilla .prototype .attack = .1;
Oscilla .prototype .decay = .1;
Oscilla .prototype .sustain = .1;
Oscilla .prototype .release = .1;
<<<<<<< HEAD

Object .defineProperty ( Oscilla .prototype, 'tune', tune );
Object .defineProperty ( Oscilla .prototype, 'pitch', pitch );
=======
>>>>>>> 53d5e0edb68445db674485fbb3a0a4bf32c82a45
