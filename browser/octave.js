export const character = {};
character .cast = 'gh';
character .action = function action ( event ) {

const { oscilla } = this;

if ( event .type === 'keyup' )
oscilla .octave = character .cast .indexOf ( event .key ) === 0 ? -1 : 1;

};
