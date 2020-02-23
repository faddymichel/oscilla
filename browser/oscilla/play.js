export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function play ( note ) {

if ( typeof note !== 'string' )
return false;

note = note .split ( ' ' );

if ( ! oscilla [ note [ 0 ] )
return false;

oscilla [ note [ 0 ] ] (
note .splice ( 1 )
);

};
