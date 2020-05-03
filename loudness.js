export const setting = {};
setting .loudness = 64;

export const character = {};
character .events = [ 'loudness' ];
character .cast = '-=';
character .action = function action ( event ) {

const setting = this;
const { partial, oscilla } = setting;

if ( event .scene .split ( ':' ) [ 1 ] === 'on' )
return;

switch ( event .character ) {

case '=':
case 'up':

if ( setting .loudness < 127 )
setting .loudness++;

break;
case '-':
case 'down':

if ( setting .loudness > 0 )
setting .loudness--;

}

oscilla .loudness ( setting .loudness / 127, partial );

};
