let loudness = .5;
export const descriptor = {};

descriptor .enumerable = true;

descriptor .get = function get () {

return loudness;

};

descriptor .set = function set ( value ) {

value = parseInt ( value );

if ( Math .abs ( value ) >= 0 && Math .abs ( value ) <= 100 )
loudness = value / 100;

};
