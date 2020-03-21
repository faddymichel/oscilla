export const character = {};
character .cast = 'gh';
character .action = function action ( event ) {

const { partial, oscilla } = this;

if ( event .type === 'keyup' )
oscilla .detune (
character .cast .indexOf ( event .key ) === 0 ? -1 : 1,
partial
);

};
