export const establishment = function establishment () {

const oscilla = this;

let steps;

Object .defineProperty ( oscilla, 'steps', {

configurable: true,
get: () => steps,
set: value => steps = parseInt ( value ) || 12

} );

oscilla .steps = 12;

};
