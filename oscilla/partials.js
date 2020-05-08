export const descriptor = {};

descriptor .enumerable = true;

const partials = function* partials ( oscilla ) {

console .log ( 'multiphonic:', oscilla .multiphonic );

const pointer = oscilla .pointer;

if ( ! oscilla .multiphonic )
yield oscilla [ pointer ];

else
do {

console .log ( 'yallah' );

const partial = oscilla [ oscilla .pointer ];
oscilla .pointer = partial .next;

yield partial;

}

while ( pointer !== oscilla .pointer );

};

descriptor .get = function get () {

const oscilla = this;

return partials ( oscilla );

};
