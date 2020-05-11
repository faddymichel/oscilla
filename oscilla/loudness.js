export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function loudness ( value ) {

if ( isNaN ( value ) )
return;

const oscilla = this;

for ( const partial of oscilla .partials ) {

partial .attributes .loudness .offset += value;
partial .attributes .loudness .offset = partial .attributes .loudness .offset < partial .attributes .loudness .min ? partial .attributes .loudness .min :
partial .attributes .loudness .offset > partial .attributes .loudness .max ? partial .attributes .loudness .max : partial .attributes .loudness .offset;
partial .attributes .loudness .value = partial .attributes .loudness .coefficient * partial .attributes .loudness .offset;



oscilla .dispatchEvent (
new CustomEvent ( 'loudness', {

detail: partial

} )
);

}

};
