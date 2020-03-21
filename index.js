import { scenarist } from '/scenarist/index.js';
import { Oscilla } from '/oscilla/index.js';

window .onload = () => {

const carrier = scenarist .create (
'carrier',
'/timbre.js',
'/pitch.js',
'/octave.js',
'/wave.js',
'/loudness.js',
'/adsr.js'
);

document .onkeydown = document .onkeyup = ( event ) => {

scenarist .play ( event );

};

};
