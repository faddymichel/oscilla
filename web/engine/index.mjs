const context = new ( window .AudioContext || window .WebkitAudioContext ) ();

export default function Oscilla ( index = 0 ) {

const { setting: program } = this;

if ( index >= program .length )
return;

const oscilla = {};
const { dac, type, delay } = program [ index ];
const node = oscilla .node = dac ? oscilla .context .destination : new window [ type + 'Node' ] ( oscilla .context );
const phase = oscilla .context .currentTime + ( delay || 0 );
const target = oscilla .target = new Oscilla ( program, index + 1 );

if ( target .node )
node .connect ( target .node );

if ( node instanceof AudioScheduledSourceNode )
node .start ( phase );

};

Object .defineProperty ( Oscilla, 'prototype', { value: {} } );
Object .defineProperty ( Oscilla .prototype, 'context', {

value: 
new ( window .AudioContext || window .WebkitAudioContext ) ()

} );
