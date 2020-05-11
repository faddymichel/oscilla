export const establishment = function establishment () {

const { scenarist } = this;

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

document .body .appendChild ( text );

};
