import { Oscilla } from './oscilla/index.js';

export const setting = {};
setting .timbre = [];
setting .chorus = false;

export const character = {};
character .events = [ 'timbre' ];
character .cast = 'Ytyu';
character .action = function action ( event ) {

if ( typeof event !== 'object' )
return;

const setting = this;
const { scenarist, timbre, pitch, steps, keys } = setting;

switch ( event .character ) {

case 'chorus':
case 'Y':

setting .chorus = ! setting .chorus;

if ( setting .chorus )
setting .partial = timbre;

else
setting .partial = [ timbre [ setting .index ] ];

break;
case 'solo':
case 'y':
case 'partial':

if ( !setting .oscilla )
setting .oscilla = new Oscilla ( {

frequency: 440,
pitch: keys .indexOf ( pitch ) + 1,
steps: steps,
keys: keys .length

} );

timbre .push ( setting .oscilla .partial ( {} ) );
setting .index = timbre .length - 1;

setting .partial = [ timbre [ setting .index ] ];

break;
case 'u':
case 'next':


setting .partial = [ timbre [ ++setting .index ] ];

break;
case 't':
case 'previous':

setting .partial = [ timbre [ --setting .index ] ];

}

};
