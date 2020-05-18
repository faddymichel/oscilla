import { Partial } from './Partial.js';

export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function partial ( attributes ) {

const oscilla = this;
const symbol = Symbol ();
oscilla [ symbol ] = new Partial ( attributes );

if ( oscilla .pointer ) {

oscilla [ symbol ] .previous = oscilla .pointer;
oscilla [ symbol ] .next = oscilla [ oscilla .pointer ] .next;

//if ( oscilla [ oscilla .pointer ] .next === oscilla .first )
//oscilla [ oscilla .first ] .previous = symbol;

oscilla [ oscilla [ oscilla .pointer ] .next ] .previous = symbol;
oscilla [ oscilla .pointer ] .next = symbol;

}

else
oscilla .first = oscilla [ symbol ] .previous = oscilla [ symbol ] .next = symbol;

oscilla .pointer = symbol;

return symbol;

};
