export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function detune ( octave, partials ) {

if ( isNaN ( octave ) )
return;

const oscilla = this;

partials .forEach ( ( partial ) => {

oscilla [ partial ] .detune = octave;

oscilla .dispatchEvent (
new CustomEvent ( 'octave', {

detail: partial

} )
);

} );

};
