import { Oscilla } from './oscilla/index.js';

window.onload = () => {

const oscilla = new Oscilla ();
const scale = 'sedrfjikolp;';

document .onkeydown = ( event ) => {

const note = 1 + scale .indexOf ( event .key );

if ( !event .repeat && note > 0 )
oscilla .pitch ( note );

};

document .onkeyup = ( event ) => {

const note = 1 + scale .indexOf ( event .key );

if ( note > 0 )
oscilla .pitch ( -note );

};

};
