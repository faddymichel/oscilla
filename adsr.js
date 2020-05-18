const increment = 'zxcv';

export const characters = {};

characters .events = [ 'adsr', 'envelope' ];
characters .cast = increment + increment .toUpperCase ();
characters .action = function action ( event ) {

const { oscilla } = this;
let name;

switch ( event .character ) {

case 'z':
case 'Z':

name = 'attack';

break;
case 'x':
case 'X':

name = 'decay';

break;
case 'c':
case 'C':

name = 'sustain';

break;
case 'v':
case 'V':

name = 'release';

}

const attribute = {};
attribute [ name ] = increment .includes ( event .character ) ? 1 : -1;

oscilla .set ( attribute );

};
