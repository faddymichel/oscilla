export const setting = {};
setting .multiphonic = {

play: false,
oscilla: []

};

export const character = {};
character .cast = 'm+';
character .action = function action ( event ) {

if ( event .type !== 'keyup' )
return;

const { oscilla, multiphonic } = this;

switch ( event .key ) {

case 'm':

multiphonic .play = !multiphonic .play;
console .log ( 'multiphonic:', multiphonic .play );

break;
case '+':

if ( multiphonic .play && oscilla && !multiphonic .oscilla .includes ( oscilla ) )
multiphonic .oscilla .push ( oscilla );

console .log ( 'length:', setting .multiphonic .oscilla .length );

}

};
