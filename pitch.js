export const setting = {};
setting .keys = "qawsedrfjikolp;[']";
setting .pitch = 'l';
setting .steps = 12;
setting .pitchMidi = 69;
setting .marginSteps = 1 + setting .keys .indexOf ( setting .pitch ) - setting .pitchMidi % setting .steps;
setting .octaveMidi = parseInt ( setting .pitchMidi / setting .steps );

export const character = {};
character .events = [
'pitch',
'note',
128,
144
];
character .cast = setting .keys;
character .action = function action ( event ) {

const setting = this;
const { oscilla, partial, keys, steps, marginSteps } = setting;
let note;

if ( typeof event .scene === 'string' && event .character .length === 1 )
note = isNaN ( parseInt ( event .character ) ) ? 1 + keys .indexOf ( event .character ) : parseInt ( event .character );

else if ( typeof event .scene === 'number' ) {

note = marginSteps + event .character % steps;
setting .octave = parseInt ( event .character / steps ) - setting .octaveMidi;

}

if ( note > 0 && oscilla ) {

switch ( typeof event .scene === 'number' ? event .scene : event .scene .split ( ':' ) [ 1 ] ) {

case 'on':
case 144:

if ( ! isNaN ( setting .octave ) )
setting .oscilla .detune ( setting .octave, setting .partial );

setting .oscilla .attack ( note, false, setting .partial );

break;

case 'off':
case 128:

setting .oscilla .release ( note, false, setting .partial );

}

}

};
