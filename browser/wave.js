export const character = {};
character .cast = '1234';
character .action = function action ( event ) {

const { oscilla } = this;

if ( event .type === 'keyup' )
oscilla .wave = event .key;

};
