export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function write ( element, content ) {

const { lines } = this;
let tag;

switch ( element ) {

case 'title':

tag = 'h1';

break;
case 'heading':

tag = 'h2';

}

lines .push (
m ( tag, {

id: lines .length

}, content )
);

m .render ( document .body, lines );

window .location .hash = lines .length - 1;

};
