import { descriptor as scenario } from './scenario.js';
import { descriptor as write } from './write.js';
import { descriptor as play } from './play.js';

export const Scenarist = function Scenarist () {

const scenarist = this;

Object .defineProperty ( scenarist, 'scenarios', {

value: {}

} );

navigator .requestMIDIAccess ()
.then ( ( midi ) => {

console .log ( 'scenarist: setting up MIDI' );
Object .defineProperty ( scenarist, 'midi', {

value: midi

} );

for ( const input of midi .inputs .values () ) {

console .log ( 'scenarist: found MIDI input' );
input .onmidimessage = ( event ) => {

const [ command, note, velocity ] = event .data;
const scenarioEvent = {};
scenarioEvent .scene = command;
scenarioEvent .character = note;
scenarioEvent .action = velocity;

scenarist .play ( scenarioEvent );

console .log ( format );
scenarist .write ( 'heading', format );

};

}

} );

const script = scenarist .script = document .createElement ( 'article' );
script .id = 'script';
document .body .appendChild ( script );

const { lines } = Object .defineProperty ( scenarist, 'lines', {

value: document .createElement ( 'ol' )

} );

script .appendChild ( lines );

const dialog = document .createElement ( 'footer' );
dialog .id = 'dialog';

script .appendChild ( dialog );

const text = document .createElement ( 'input' );
text .type = text .id = 'text';

let focus;

text .onfocus = ( event ) => {

focus = true;

};

text .onblur = ( event ) => {

focus = false;

};

text .onkeyup = ( event ) => {

if ( event .key === 'Enter' ) {

const scenarioEvent = {};
const args = text .value
.trim ()
.split ( ' ' );
scenarioEvent .scene = args [ 0 ];
scenarioEvent .character = args [ 1 ];
scenarioEvent .action = args [ 2 ];

scenarist .play ( scenarioEvent );
text .value = '';

}

else if ( event .key === 'Escape' )
text .blur ();

};

document .onkeydown = document .onkeyup = ( event ) => {

if ( ! focus ) {

const scenarioEvent = {};

scenarioEvent .scene = event .type === 'keydown' ? `${ event .key }:on` : `${ event .key }:off`;
scenarioEvent .character = event .key;

scenarist .play ( scenarioEvent );

}

if ( event .type === 'keyup' && event .key === 'Control' ) {

text .focus ();

}

};

dialog .appendChild ( text );

};

Object .defineProperty ( Scenarist .prototype, 'scenario', scenario );
Object .defineProperty ( Scenarist .prototype, 'write', write );
Object .defineProperty ( Scenarist .prototype, 'play', play );
