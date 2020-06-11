import { Oscilla } from './oscilla/index.js';

export const establishment = function establishment () {

const setting = this;

setting .oscilla = new Oscilla ();

setting .oscilla .tuning ( {

reference: {

frequency: 440,
note: setting .keys .indexOf ( setting .pitch ) + 1,

},
steps: setting .steps,
keys: setting .keys .length

} );

setting .oscilla .partial ( {

detune: 0

} );

};

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

setting .oscilla .multiphonic = event .character === 'Y' ? ! setting .oscilla .multiphonic :
event .character === 'chorus' ? true : false;

console .log ( 'after:', setting .oscilla .multiphonic );

break;
case 'y':
case 'partial':

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
