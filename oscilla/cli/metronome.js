import Controller from './controller.js';

export default class Metronome extends Controller {

$on () {

super .$on ();

const sound = this;

sound .$tempo ( 90 );
sound .$measure ( 4 );
sound .$divisions ( 4 );

sound .$metronome ();

}

$metronome () {

const sound = this;

if ( ! sound .on )
sound .$on ();

if ( ! sound .get ( 'metronome' ) ) {

sound .$score ( 'i "MetroClock" 0 -1' );

sound .set ( 'metronome', true );

}

else {

sound .$score ( 'i "-MetroClock" 0 0' );

sound .set ( 'metronome', false );

}

}

$tempo ( value ) {

this .$set ( 'MetroTempo', value );

}

$measure ( value ) {

this .$set ( 'MetroMeasure', value );

}

$divisions ( value ) {

this .$set ( 'MetroDivisions', value );

}

};
