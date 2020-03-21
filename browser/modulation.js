export const character = {};

character .cast = './';
character .action = function action ( event ) {

const { partial, oscilla } = this;

if ( event .type === 'keyup' ) {

oscilla .modulation ( (
character .cast .indexOf ( event .key ) === 0 ?
-.05 : .05
), partial );

}

};
