export const setting = {};

export const characters = {};
characters .events = [ 'detune', 'octave' ];
characters .cast = 'gh';
characters .action = function action ( event ) {

const setting = this;
const { timbre, oscilla } = setting;

if ( event .scene .split ( ':' ) [ 1 ] === 'on' )
return;

switch ( event .character ) {

case 'h':
case 'high':
case 'up':

setting .oscilla .detune ( 1 );

break;
case 'g':
case 'low':
case 'down':

setting .oscilla .detune ( -1 );

}

oscilla .detune ( setting .detune, timbre );

};
