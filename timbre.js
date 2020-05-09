import { Oscilla } from './oscilla/index.js';

export const characters = {};
characters .events = [ 'timbre' ];
characters .cast = 'Ytyu';
characters .action = function action ( event ) {

if ( event .scene && event .scene .split ( ':' ) [ 1 ] === 'on' )
return;

const setting = this;
const { scenarist, pitch, steps, keys } = setting;

switch ( event .character ) {

case 'chorus':
case 'solo':
case 'Y':


console .log ( 'before:', setting .oscilla .multiphonic );

setting .oscilla .multiphonic = event .character === 'Y' ? ! setting .oscilla .multiphonic :
event .character === 'chorus' ? true : false;

console .log ( 'after:', setting .oscilla .multiphonic );

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

setting .oscilla .partial ( {} );

break;
case 'u':
case 'next':

setting .oscilla .focus ( 'next' );

break;
case 't':
case 'previous':

setting .oscilla .focus ( 'previous' );

}

};
