import { Oscilla } from './oscilla/index.js';

window .onload = () => {

const oscilla = new Oscilla ();
const scale = "qawsedrfjikolp;[']";
const wave = '1234';
const octave = 'gh';

oscilla .tune ( {

frequency: 440,
pitch: scale .indexOf ( 'l' ) + 1,
steps: 12,
keys: scale .length

} );

document .onkeydown = ( event ) => {

switch ( event .key ) {

case ( scale .includes ( event .key ) ? event .key : undefined ):

const note = 1 + scale .indexOf ( event .key );

if ( !event .repeat && note > 0 )
oscilla .pitch ( note );

break;
case '-':

oscilla .loudness -= .05;

break;
case '=':
oscilla .loudness += .05;

break;
case ( wave .includes ( event .key ) ? event .key : undefined ):

oscilla .wave = event .key;

break;
case ( octave .includes ( event .key ) ? event .key : undefined ):

oscilla .octave = octave .indexOf ( event .key ) === 0 ? -1 : 1;

}

};

document .onkeyup = ( event ) => {

const note = 1 + scale .indexOf ( event .key );

if ( note > 0 )
oscilla .pitch ( -note );

};

};
