export const establishment = function establishment () {

const oscilla = this;

let steps;

Object .defineProperty ( oscilla, 'steps', {

configurable: true,
get: () => steps,
set: value => steps = parseInt ( value ) || 12

} );

oscilla .steps = 12;

const scale = [

'KeyQ',
'KeyA',
'KeyS',
'KeyE',
'KeyD',
'KeyR',
'KeyF',

'KeyJ',
'KeyI',
'KeyK',
'KeyO',
'KeyL',
'Semicolon',
'BracketLeft',
'Quote',
'BracketRight'

] .map ( ( code, index ) => {

keyboard [ code ] = ( index - 2 ) + ( oscilla .octave * oscilla .steps );

} );

};
