import { Oscilla } from './oscilla/index.js';

export const character = {};
character .cast = 'tyu';
character .action = function action ( event ) {

const setting = this;
const { orchestra, pitch, steps, keys } = setting;

if ( event .type === 'keyup' )
switch ( event .key ) {

case 'y':

const oscilla = new Oscilla ();

oscilla .tune ( {

frequency: 440,
pitch: keys .indexOf ( pitch ) + 1,
steps: steps,
keys: keys .length

} );

if ( setting .oscilla ) {

oscilla .octave = setting .oscilla .octave;
orchestra .unshift ( setting .oscilla );

}

setting .oscilla = oscilla;

break;
case 'u':

orchestra .unshift ( setting .oscilla );
setting .oscilla = orchestra .pop ();

break;
case 't':

orchestra .push ( setting .oscilla );
setting .oscilla = orchestra .shift ();

}

};

export const setting = {};
setting .orchestra = [];
