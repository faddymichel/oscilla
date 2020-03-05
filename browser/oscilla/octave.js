export const Descriptor = () => {

let octave = 0;

const descriptor = {};

descriptor .enumerable = true;

descriptor .set = function set ( value ) {

if ( isNaN ( value ) )
return;

const oscilla = this;

octave += value;

oscilla .dispatchEvent (
new Event ( 'octave' )
);

};

descriptor .get = function get () {

return octave;

};

return descriptor;

};
