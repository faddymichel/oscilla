import { Oscilla } from './oscilla/index.js';

export const setting = {};
setting .timbre = [];

export const character = {};
character .name = 'timbre';
character .cast = 'Ytyu';
character .action = function action ( event ) {

const setting = this;
const { scenarist, timbre, pitch, steps, keys } = setting;

if ( typeof event === 'object' && event .type !== 'keyup' )
return;

else if ( typeof event === 'string' )
event = event
.split ( ' ' )
.splice ( 1 );

scenarist .write ( 'heading', character .name );

switch ( event .key || event [ 0 ] ) {

case 'Y':

timbre .unshift ( setting .partial .pop () );
setting .partial = timbre;

break;
case 'y':
case 'partial':

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
case 'next':

timbre .unshift ( setting .partial .pop () );
setting .partial = [ timbre .pop () ];

break;
case 't':
case 'previous':

timbre .push ( setting .partial .pop () );
setting .partial = [ timbre .shift () ];

}

};
