import { Scenarist } from '/oscilla/scenarist/index.js';
import { Oscilla } from '/oscilla/oscilla/index.js';

window .onload = () => {

const scenarist = new Scenarist ();

scenarist .scenario (
'carrier',
'/oscilla/timbre.js',
'/oscilla/pitch.js',
'/oscilla/octave.js',
'/oscilla/wave.js',
'/oscilla/loudness.js',
'/oscilla/adsr.js'
);

scenarist .display = 'carrier';

/*
document .onkeydown = document .onkeyup = ( event ) => {

scenarist .play ( event );

};
*/

};
