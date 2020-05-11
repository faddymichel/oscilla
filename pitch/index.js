import { establishment } from './establishment.js';

const setting = {};

setting .keys = "qawsedrfjikolp;[']";
setting .pitch = 'l';
setting .steps = 12;
setting .pitchMidi = 69;
setting .marginSteps = 1 + setting .keys .indexOf ( setting .pitch ) - setting .pitchMidi % setting .steps;
setting .octaveMidi = parseInt ( setting .pitchMidi / setting .steps );

const characters = {};
characters .events = [
'pitch',
'note',
128,
144
];
characters .cast = setting .keys;
characters .action = function action ( event ) {

console .log ( 'yallah' );

const setting = this;
const { oscilla, keys, steps, marginSteps } = setting;
let note;

if ( typeof event .scene === 'string' && event .character .length === 1 )
note = isNaN ( parseInt ( event .character ) ) ? 1 + keys .indexOf ( event .character ) : parseInt ( event .character );

else if ( typeof event .scene === 'number' ) {

note = marginSteps + event .character % steps;
setting .detune = parseInt ( event .character / steps ) - setting .octaveMidi;

}

if ( note > 0 && oscilla ) {

switch ( typeof event .scene === 'number' ? event .scene : event .scene .split ( ':' ) [ 1 ] ) {

case 'on':
case 144:

if ( ! isNaN ( setting .detune ) )
setting .oscilla .detune ( setting .detune, setting .timbre );

setting .oscilla .attack ( note, false, setting .timbre );

break;

case 'off':
case 128:

setting .oscilla .release ( note, false, setting .timbre );

}

}

};

export {

establishment,
characters,
setting

};
