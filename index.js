import { scenarist } from '/oscilla/scenarist/index.js';
import { Oscilla } from '/oscilla/oscilla/index.js';

window .onload = () => {

const carrier = scenarist .create (
'carrier',
'/oscilla/timbre.js',
'/oscilla/pitch.js',
'/oscilla/octave.js',
'/oscilla/wave.js',
'/oscilla/loudness.js',
'/oscilla/adsr.js'
);

document .onkeydown = document .onkeyup = ( event ) => {

scenarist .play ( event );

};

};
