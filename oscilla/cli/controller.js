import { Console } from 'console';

export default class Controller extends Map {

#controller

$on () {

const sound = this;

sound .#controller = new Console ( sound .process .stdin );

}

#action = {}

$score ( ... line ) {

const sound = this;
const signal = `line-${ Date .now () }`;

sound .#controller .log ( ... line, `"${ signal }"` );

return new Promise ( cue => {

sound .#action [ signal ] = cue;

} );

}

cue ( signal, ... scenario ) {

const sound = this;

if ( typeof sound .#action [ signal ] === 'function' )
sound .#action [ signal ] ( scenario );

}

$set ( parameter, value ) {

const sound = this;

if ( [ '+', '-' ] .includes ( value ?.[ 0 ] ) )
value = ( sound .get ( parameter ) || 0 ) + ( parseFloat ( value .substring ( 1 ) ) || value [ 0 ] === '+' ? 1 : -1 );

else
value = parseFloat ( value ) || ( sound .get ( parameter ) || 0 );

sound .set ( parameter, value );

sound .$score ( `i "${ parameter }" 0 0 ${ value }` );

}

};
