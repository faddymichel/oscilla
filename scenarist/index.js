import { descriptor as scenario } from './scenario.js';
import { descriptor as write } from './write.js';
import { descriptor as play } from './play.js';

export const Scenarist = function Scenarist () {

const scenarist = this;

Object .defineProperty ( scenarist, 'scenarios', {

value: {}

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

scenarist .play ( text .value );
text .value = '';

}

else if ( event .key === 'Escape' )
text .blur ();

};

document .onkeydown = document .onkeyup = ( event ) => {

if ( ! focus )
scenarist .play ( event );

if ( event .type === 'keyup' && event .key === 'Control' ) {

text .focus ();

}

};

dialog .appendChild ( text );

};

Object .defineProperty ( Scenarist .prototype, 'scenario', scenario );
Object .defineProperty ( Scenarist .prototype, 'write', write );
Object .defineProperty ( Scenarist .prototype, 'play', play );
