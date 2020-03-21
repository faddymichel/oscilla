export const character = {};
character .cast = '1234';
character .action = function action ( event ) {

const { partial, oscilla } = this;

if ( event .type === 'keyup' )
oscilla .wave ( event .key, partial );

};
