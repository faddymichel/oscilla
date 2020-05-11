const domain = {};

domain [ '1' ] = 'sine';
domain [ '2' ] = 'square';
domain [ '3' ] = 'sawtooth';
domain [ '4' ] = 'triangle';

export const descriptor = {};

descriptor .enumerable = true;
descriptor .value = function wave ( value ) {

const oscilla = this;

for ( const partial of oscilla .partials ) {

partial .attributes .wave = domain [ value ] ? domain [ value ] : domain [ '1' ];

oscilla .dispatchEvent (
new CustomEvent ( 'wave', {

detail: partial

} )
);

}

};
