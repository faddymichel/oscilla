export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function write ( element, content ) {

const { lines } = this;
let tag;
let type;

switch ( element ) {

case 'title':

tag = 'h1';
type = 'title';

break;
case 'heading':

tag = 'h2';
type = 'heading';

}

const line = document .createElement ( tag );
line .class = type;
line .textContent = content;

lines .appendChild ( line );

//window .location .hash = lines .length - 1;

};
