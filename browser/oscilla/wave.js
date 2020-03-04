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

const { key } = this;

wave = domain [ value ] ? domain [ value ] : domain [ '1' ];

for ( let note in key ) {

key [ note ]
.oscillator
.type = wave;

}

};

descriptor .get = function get () {

return wave;

};

return descriptor;

};
