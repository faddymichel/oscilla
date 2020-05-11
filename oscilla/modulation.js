export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function modulation ( value, partials ) {

if ( isNaN ( value ) )
return;

const oscilla = this;

partials .forEach ( ( partial ) => {

oscilla [ partial ] .attributes .modulation += value;

oscilla .dispatchEvent (
new CustomEvent ( 'modulation', {

detail: partial

} )
);

} );

};
