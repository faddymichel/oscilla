export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function detune ( octave ) {

if ( isNaN ( octave ) )
return;

const oscilla = this;

for ( const partial of oscilla .partials ) {

let detune = partial .attributes .detune + octave;
partial .attributes .detune = detune > 5 ? 5 :
detune < -5 ? -5 : detune;

oscilla .dispatchEvent (
new CustomEvent ( 'octave', {

detail: partial

} )
);

}

};
