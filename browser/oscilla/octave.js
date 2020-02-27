export const Descriptor = () => {

let octave = 0;

const descriptor = {};

descriptor .enumerable = true;

descriptor .set = function set ( value ) {

const { context, oscillators, steps } = this;

if ( value !== 1 && value !== -1 )
return;

octave += value;

Object .keys ( oscillators ) .forEach ( ( key ) => {

oscillators [ key ]
.detune
.setValueAtTime (
octave * 100 * steps,
context .currentTime
);

} );

};

descriptor .get = function get () {

return octave;

};

return descriptor;

};
