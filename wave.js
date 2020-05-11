export const characters = {};
characters .events = [ 'wave' ];
characters .cast = '1234';
characters .action = function action ( event ) {

const { timbre, oscilla } = this;

if ( event .scene .split ( ':' ) [ 1 ] === 'on' )
return;

switch ( event .character ) {

case '1':
case '2':
case '3':
case '4':

oscilla .wave ( event .character, timbre );

}

};
