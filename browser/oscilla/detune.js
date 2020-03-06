export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function detune ( octave, partial ) {

if ( isNaN ( octave ) )
return;

const oscilla = this;

oscilla [ partial ] .detune += octave;

oscilla .dispatchEvent (
new CustomEvent ( 'octave', {

detail: partial

} )
);

};
