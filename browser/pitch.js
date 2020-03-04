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
note = event .type .toLowerCase () === 'keydown' ? note : -note;

if ( !event .repeat && Math .abs ( note ) > 0 ) {

if ( multiphonic .play && multiphonic .oscilla .length > 0 )
multiphonic .oscilla .forEach ( ( oscilla ) => {

console .log ( 'oscilla:', oscilla );
oscilla .pitch ( note );

} );

else if ( setting .oscilla )
setting .oscilla .pitch ( note );

}

};
