export const descriptor = {};

descriptor .enumerable = true;

const timbre = function* timbre ( oscilla ) {

const pointer = oscilla .pointer;

if ( ! oscilla .multiphonic )
yield oscilla [ pointer ];

else
do {

const partial = oscilla [ oscilla .pointer ];
oscilla .pointer = partial .next;

yield partial;

}

while ( pointer !== oscilla .pointer );

};

descriptor .get = function get () {

const oscilla = this;

return timbre ( oscilla );

};
