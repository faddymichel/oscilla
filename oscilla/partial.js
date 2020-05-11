export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function partial ( attributes ) {

const oscilla = this;
const symbol = Symbol ();
oscilla [ symbol ] = {};
oscilla [ symbol ] .attributes = {

wave: attributes .wave || 'sawtooth',
detune: attributes .detune || 0,
loudness: {

min: 0,
max: 127,
offset: 64,
coefficient: 1 / 127,
value: 64 / 127

},
modulation: attributes .modulation || 0

};

if ( oscilla .pointer ) {

oscilla [ symbol ] .previous = oscilla .pointer;
oscilla [ symbol ] .next = oscilla [ oscilla .pointer ] .next;
oscilla [ oscilla .pointer ] .next = symbol;

}

else
oscilla [ symbol ] .previous = oscilla [ symbol ] .next = symbol;

oscilla .pointer = symbol;

return symbol;

};
