export const characters = {};
characters .events = [ 'loudness' ];
characters .cast = '-=';
characters .action = function action ( event ) {

const setting = this;
const { partial, oscilla } = setting;

switch ( event .character ) {

case '=':
case 'up':

setting .oscilla .loudness ( 1 );

break;
case '-':
case 'down':

setting .oscilla .loudness ( -1 );
}

oscilla .loudness ( setting .loudness / 127, partial );

};
