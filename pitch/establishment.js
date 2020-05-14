export const establishment = function establishment () {

const { scenarist } = this;
const namespace = 'http://www.w3.org/2000/svg';

scenarist .write ( 'main', 'section', {

id: 'pitch',
class: 'scene'

} )
.write ( 'section#pitch', 'h2', {}, 'Pitch' )

const keys = "qawsedrf jikolp;[']";
const semitones = "aeriop'";
const positions = [];
const radius = 50;
const gap = .3 * radius;
let x, y = x = radius + gap;

for ( let i = 0; i < keys .length; i++, x += 2 * radius + gap ) {

if ( keys [ i ] === ' ' ) {

positions .push ( null );
continue;

}

y = i % 2 === 0 ? y : y + radius + gap;

positions .push ( [

`${ x + radius },${ y }`,
`${ x },${ y + radius }`,
`${ x - radius },${ y }`,
`${ x },${ y - radius }`

] .join ( ' ' ) );

y = i % 2 === 0 ? y : y - radius - gap;
}

scenarist .write ( 'section#pitch', `${ namespace } svg`, {

id: 'keyboard',
viewBox: `0 0 ${ x + radius + gap } ${ y + 2 * radius + 2 * gap }`

} );

positions .forEach ( ( position, i ) => {

if ( ! position )
return;

const buttonObject = {};
buttonObject .width = 0 * radius;
buttonObject .height = 0 * radius;
buttonObject .x = x;
buttonObject .y = y;

const button = {};
button .type = 'button';
button .value = keys [ i ];

const key = {};

key .id = 'key-' + keys [ i ];
key .class = `key ${ semitones .includes ( keys [ i ] ) ? 'black' : 'white' }`;
key .points = position;
key .onpointerdown
= key .onpointerup
= button .onpointerdown
= button .pointerup
= ( event ) => {

scenarist .play ( {

scene: button .value + ':' + ( event .type .endsWith ( 'down' ) ? 'on' : 'off' ),
character: button .value

} );

};

scenarist
.write ( 'svg#keyboard', `${ namespace } foreignObject`, buttonObject )
.write ( 'svg#keyboard', 'input', button )
.write ( 'svg#keyboard', `${ namespace } polygon`, key );

} );

};
