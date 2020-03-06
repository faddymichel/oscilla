import { Oscilla } from './oscilla/index.js';

export const setting = {};
setting .timbre = [];

export const character = {};
character .cast = 'tyu';
character .action = function action ( event ) {

const setting = this;
const { timbre, pitch, steps, keys } = setting;

if ( event .type === 'keyup' )
switch ( event .key ) {

case 'y':

if ( !setting .oscilla )
setting .oscilla = new Oscilla ( {

frequency: 440,
pitch: keys .indexOf ( pitch ) + 1,
steps: steps,
keys: keys .length

} );

const partial = setting .oscilla .partial ( {} );

if ( setting .partial ) {

partial .octave = setting .partial .octave;
timbre .unshift ( setting .partial );

}

setting .partial = partial;

break;
case 'u':

timbre .unshift ( setting .partial );
setting .partial = timbre .pop ();

break;
case 't':

timbre .push ( setting .partial );
setting .partial = timbre .shift ();

}

};
