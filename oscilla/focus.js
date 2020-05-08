export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function focus ( directive ) {

const oscilla = this;

switch ( directive ) {

case 'next':

oscilla .pointer = oscilla [ oscilla .pointer ] .next;

break;
case 'previous':

oscilla .pointer = oscilla [ oscilla .pointer ] .previous;

}

};
