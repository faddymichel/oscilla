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
const keyboard = [];
const radius = 50;
const gap = .3 * radius;
let x, y = x = radius + gap;

for ( let i = 0; i < keys .length; i++, x += 2 * radius + gap ) {

if ( keys [ i ] === ' ' ) {

keyboard .push ( null );
continue;

}

y = i % 2 === 0 ? y : y + radius + gap;

const key = {};

key .cap = {};

key .cap .points = [

`${ x + radius },${ y }`,
`${ x },${ y + radius }`,
`${ x - radius },${ y }`,
`${ x },${ y - radius }`

] .join ( ' ' );

key .cap .id = 'cap-' + i;
key .cap .class = 'cap';

key .cap .onpointerdown
= key .cap .onpointerup
= ( event ) => {

scenarist .play ( {

scene: button .value + ':' + ( event .type .endsWith ( 'down' ) ? 'on' : 'off' ),
character: button .value

} );

};

key .text = {};

key .text .id = 'text-' + i;
key .text .class = 'text';
key .text [ 'text-anchor' ] = 'middle';

keyboard .push ( key );

y = i % 2 === 0 ? y : y - radius - gap;

}

scenarist .write ( 'section#pitch', `${ namespace } svg`, {

id: 'keyboard',
viewBox: `0 0 ${ x + radius + gap } ${ y + 2 * radius + 2 * gap }`

} );

keyboard .forEach ( ( key, i ) => {

if ( ! key )
return;

scenarist
.write ( 'svg#keyboard', `${ namespace } g`, {

id: 'key-' + i,
class: `key ${ semitones .includes ( keys [ i ] ) ? 'black' : 'white' }`

} )
.write ( `#key-${ i }`, `${ namespace } polygon`, key .cap )
.write ( `#key-${ i }`, `${ namespace } text`, key .text, keys [ i ] );

} );

};
