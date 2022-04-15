const resolve = Symbol ();
const pending = Symbol ();
const resolver = () => {

let nodeResolver;
const promise = new Promise ( resolve => { nodeResolver = resolve; } );

promise [ pending ] = true;
promise [ resolve ] = node => {

promise [ pending ] =false;
nodeResolver ( node );

};

return promise;

};

export default async function on () {

const note = this;

const { graph, context, module } = note;
const { type, node, parameter, delay } = module;

if ( graph [ node ] === undefined )
graph [ node ] = resolver ();

switch ( type ) {

case 'node':

note .output = graph [ node ];

break;

case 'parameter':

note .output = graph [ node ] .then ( node => node [ parameter ] );

break;

case 'dac':

note .output = Promise .resolve ( context .destination );

break;

default:

if ( graph [ node ] )

if ( graph [ node ] [ pending ] !== true )
return;

graph [ node ] [resolve ] ( new window [ type + 'Node' ] ( context ) );

note .phase = context .currentTime + ( delay || 0 );

node .output .then ( output => {

if ( output instanceof AudioScheduledSourceNode )
output .start ( note .phase );

} );

}

return note;

};
