export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function cursor () {

const oscilla = this;

if ( oscilla .pointer ) {

oscilla [ symbol ] .previous = oscilla .pointer;
oscilla [ symbol ] .next = oscilla [ oscilla .pointer ] .next;

oscilla [ oscilla [ oscilla .pointer ] .next ] .previous = symbol;
oscilla [ oscilla .pointer ] .next = symbol;

}

else
oscilla [ symbol ] .previous = oscilla [ symbol ] .next = symbol;

oscilla .pointer = symbol;

};
