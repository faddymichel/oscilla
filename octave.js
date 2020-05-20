export const setting = {};

export const characters = {};
characters .events = [ 'detune', 'octave' ];
characters .cast = 'gh';
characters .action = function action ( event ) {

const setting = this;

if ( event .scene .split ( ':' ) [ 1 ] === 'on' )
return;

switch ( event .character ) {

case 'h':
case 'high':
case 'up':

setting .oscilla .set ( {

detune: 1

} );
//setting .oscilla .detune ( 1 );

break;
case 'g':
case 'low':
case 'down':

setting .oscilla .set ( {

detune: -1

} );
//setting .oscilla .detune ( -1 );

}

};
