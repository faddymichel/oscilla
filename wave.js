export const character = {};
character .events = [ 'wave' ];
character .cast = '1234';
character .action = function action ( event ) {

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
