export const setting = {};
setting .octave = 0;

export const character = {};
character .events = [ 'octave', 'detune' ];
character .cast = 'gh';
character .action = function action ( event ) {

const setting = this;
const { partial, oscilla } = setting;

if ( event .scene .split ( ':' ) [ 1 ] === 'on' )
return;

switch ( event .character ) {

case 'h':
case 'high':
case 'up':

if ( setting .octave < 5 )
setting .octave++;

break;
case 'g':
case 'low':
case 'down':

if ( setting .octave > -5 )
setting .octave--;

}

oscilla .detune ( setting .octave, partial );

};
