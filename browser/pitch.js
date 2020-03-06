let attacked = {};

export const setting = {};
setting .keys = "qawsedrfjikolp;[']";
setting .pitch = 'l';
setting .steps = 12;

export const character = {};
character .cast = setting .keys;
character .action = function action ( event ) {

const setting = this;
const { multiphonic, keys } = setting;
let note = 1 + keys .indexOf ( event .key );

if ( !event .repeat && note > 0 ) {

if ( multiphonic .play && multiphonic .oscilla .length > 0 )
multiphonic .oscilla .forEach ( ( oscilla ) => {

oscilla .pitch ( note );

} );

else if ( setting .oscilla )

if ( event .type === 'keydown' && !attacked [ note ] ) {

attacked [ note ] = true;
setting .oscilla .attack ( note, setting .partial );

} else if ( event .type === 'keyup' && attacked [ note ] ) {

setting .oscilla .release ( note, setting .partial );
attacked [ note ] = false;

}

}

};
