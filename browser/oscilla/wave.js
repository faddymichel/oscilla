export const Descriptor = () => {

const domain = {};

domain [ '1' ] = 'sine';
domain [ '2' ] = 'square';
domain [ '3' ] = 'sawtooth';
domain [ '4' ] = 'triangle';

let wave = domain [ '1' ];

const descriptor = {};

descriptor .enumerable = true;
descriptor .set = function set ( value ) {

const { oscillators } = this;

wave = domain [ value ] ? domain [ value ] : domain [ '1' ];

Object .keys ( oscillators ) .forEach ( ( key ) => {

oscillators [ key ] .type = wave;

} );

};

descriptor .get = function get () {

return wave;

};

return descriptor;

};
