import { Partial } from './Partial.js';

export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function partial ( attributes ) {

const oscilla = this;
const symbol = Symbol ();
const partial = oscilla [ symbol ] = new Partial ( oscilla .key .octave );

if ( oscilla .pointer ) {

oscilla [ symbol ] .previous = oscilla .pointer;
oscilla [ symbol ] .next = oscilla [ oscilla .pointer ] .next;

oscilla [ oscilla [ oscilla .pointer ] .next ] .previous = symbol;
oscilla [ oscilla .pointer ] .next = symbol;

}

else
oscilla [ symbol ] .previous = oscilla [ symbol ] .next = symbol;

oscilla .pointer = symbol;

const multiphonic = oscilla .multiphonic;

console .log ( JSON .stringify ( attributes ) );

oscilla .multiphonic = false;
oscilla .set ( attributes );
oscilla .multiphonic = multiphonic;

console .log ( JSON .stringify ( partial .attributes .detune ) );

return symbol;

};
