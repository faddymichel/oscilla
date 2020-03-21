import { Oscilla } from './oscilla/index.js';

export const setting = {};
setting .timbre = [];

export const character = {};
character .cast = 'Ytyu';
character .action = function action ( event ) {

const setting = this;
const { timbre, pitch, steps, keys } = setting;

if ( event .type === 'keyup' )
switch ( event .key ) {

case 'Y':

timbre .unshift ( setting .partial .pop () );
setting .partial = timbre;

console .log ( 'timbre:', setting .partial .length );

break;
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

timbre .unshift ( setting .partial .pop () );

}

setting .partial = [ partial ];

break;
case 'u':

timbre .unshift ( setting .partial .pop () );
setting .partial = [ timbre .pop () ];

break;
case 't':

timbre .push ( setting .partial .pop () );
setting .partial = [ timbre .shift () ];

}

};
