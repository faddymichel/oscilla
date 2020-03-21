const domain = {};

domain [ '1' ] = 'sine';
domain [ '2' ] = 'square';
domain [ '3' ] = 'sawtooth';
domain [ '4' ] = 'triangle';

export const descriptor = {};

descriptor .enumerable = true;
descriptor .value = function wave ( value, partials ) {

const oscilla = this;

partials .forEach ( ( partial ) => {

oscilla [ partial ] .wave = domain [ value ] ? domain [ value ] : domain [ '1' ];

oscilla .dispatchEvent (
new CustomEvent ( 'wave', {

detail: partial

} )
);

} );

};
