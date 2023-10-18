export default function Module () {

const sound = this;

return Object .defineProperty (

module .bind ( sound, name ),
'name', { value: name }

);

};

const module = function ( name ) {

const sound = this;

if ( ! sound [ Symbol .for ( 'sound/on' ) ] )
sound .$on ();


if ( ! sound [ Symbol .for ( 'sound/' + name ) ] ) {

sound .controller .log ( `i "${ name }" 0 -1` );

sound [ Symbol .for ( 'sound/' + name ) ] = true;

}

else {

sound .controller .log ( 'i "-MetroClock" 0 0' );

sound [ Symbol .for ( 'sound/' + name ) ] = false;

}

};
