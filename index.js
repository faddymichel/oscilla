import { Scenarist } from '/oscilla/scenarist/index.js';
import { Oscilla } from '/oscilla/oscilla/index.js';

window .onload = () => {

const scenarist = new Scenarist ();

scenarist .scenario ( {

name: 'carrier',
paths: [

'/oscilla/ascii.js',
'/oscilla/midi.js',
'/oscilla/timbre.js',
'/oscilla/pitch/index.js',
'/oscilla/octave.js',
'/oscilla/wave.js',
'/oscilla/loudness.js',
//'/oscilla/adsr.js'

],
establish: true

}

);

scenarist .display = 'carrier';

/*
document .onkeydown = document .onkeyup = ( event ) => {

scenarist .play ( event );

};
*/

};
