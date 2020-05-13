export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function write ( selector, tag, attributes, content ) {

if ( typeof selector !== 'string' || typeof tag !== 'string' )
return this;

const parent = document .querySelector ( selector );

if ( !parent )
return this;

const element = document .createElement ( tag );

if ( typeof attributes === 'object' )
Object .assign ( element, attributes );

if ( typeof content === 'string' )
element .textContent = content;

parent .appendChild ( element );

return this;

};
