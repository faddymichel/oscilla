export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function engine ( note ) {

const oscilla = this;

for ( const partial of oscilla .timbre ) {

partial [ note ] = {};

for ( const { signature, type, parameters } of oscilla .instruments ) {

const instrument = partial [ note ] [ signature ] = oscilla [ 'create' + type ] ();

for ( const parameter of parameters ) {

if ( parameter .setter )
instrument [ parameter .name ] [ parameter .setter ] = parameter .value;

else
instrument [ parameter .name ] = parameter .value;

}

}

for ( const { signature, destinations } of oscilla .instruments ) {

const instrument = partial [ note ] [ signature ];

for ( const { signature, parameter } of destinations ) {

const destination = parameter ? partial [ note ] [ signature ] [ parameter ] : partial [ note ] [ signature ];

instrument .connect ( destination );

}

}

for ( const { signature } of oscilla .instruments )
partial [ note ] .start ();

}

};
