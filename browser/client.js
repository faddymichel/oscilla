import { scenarist } from './scenarist/index.js';
import { Oscilla } from './oscilla/index.js';

window .onload = () => {

const scenario = scenarist .create ();

[

'./orchestra.js',
'./multiphonic.js',
'./pitch.js',
'./octave.js',
'./wave.js',
'./loudness.js',
'./adsr.js'

] .forEach ( ( path) => {

import ( path )
.then ( ( module ) => {

scenario .create (
module .character,
module .setting
);

} );

} );

document .onkeydown = document .onkeyup = ( event ) => {

scenarist .play ( event );

};

};
