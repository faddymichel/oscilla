export const Instrument = class Instrument () {

constructor ( { signature, type } {

if ( typeof oscilla [ 'create' + type ] !== 'function' )
throw new TypeError ( 'Invalid type of Instrument' );

const instrument = this;

instrument [ signature ] = oscilla [ 'create' + type ] ();

}

parameter () {

}

};
