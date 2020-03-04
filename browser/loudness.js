export const character = {};

character .cast = '-=';
character .action = function action ( event ) {

const { oscilla } = this;

if ( event .type === 'keyup' ) {

oscilla .loudness = character .cast .indexOf ( event .key ) === 0 ?
oscilla .loudness * 100 - 5 :
oscilla .loudness * 100 + 5;

console .log ( 'oscilla .loudness', oscilla .loudness );

}

};
