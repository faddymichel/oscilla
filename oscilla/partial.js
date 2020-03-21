export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function partial ( attributes ) {

const oscilla = this;
const symbol = Symbol ();

Object .defineProperty ( oscilla, symbol, {

value: {

wave: attributes .wave,
detune: attributes .detune || 0,
loudness: attributes .loudness || .15,
modulation: attributes .modulation || 0

}

} );

return symbol;

};
