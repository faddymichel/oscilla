export const establishment = function establishment () {

const { scenarist } = this;
const namespace = 'http://www.w3.org/2000/svg';

const keyboard = document .createElementNS ( namespace, 'svg' );

const radius = 50;
const gap = .3 * radius;
let x, y = x = radius + gap;

for (

let keys = "qawsedrf jikolp;[']",
i = 0;

i < keys .length;

i++,
x += 2 * radius + gap

) {

if ( keys [ i ] === ' ' )
continue;

y = i % 2 === 0 ? y : y + radius + gap;

const buttonObject = document .createElementNS ( namespace, 'foreignObject' );
buttonObject .setAttribute ( 'width', 0 * radius );
buttonObject .setAttribute ( 'height', 0 * radius );
buttonObject .setAttribute ( 'x', x );
buttonObject .setAttribute ( 'y', y );

const button = document .createElement ( 'input' );
button .type = 'button';
button .value = keys [ i ];

const key = document .createElementNS ( namespace, 'polygon' );

key .setAttribute ( 'id', 'key-' + keys [ i ] );
key .setAttribute ( 'class', 'key' );
key .setAttribute ( 'points', [

`${ x + radius },${ y }`,
`${ x },${ y + radius }`,
`${ x - radius },${ y }`,
`${ x },${ y - radius }`

] .join ( ' ' ) );

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

buttonObject .appendChild ( button );
keyboard .appendChild ( buttonObject );
keyboard .appendChild ( key );

y = i % 2 === 0 ? y : y - radius - gap;

}

keyboard .setAttribute ( 'id', 'pitch' );
keyboard .setAttribute ( 'viewBox', `0 0 ${ x + radius + gap } ${ y + 2 * radius + gap }` );

document .body .appendChild ( keyboard );

};
