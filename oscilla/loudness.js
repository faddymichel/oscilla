export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function loudness ( value, partials ) {

if ( isNaN ( value ) )
return;

const oscilla = this;

partials .forEach ( ( partial ) => {

oscilla [ partial ] .loudness = value;

oscilla .dispatchEvent (
new CustomEvent ( 'loudness', {

detail: partial

} )
);

} );

};
