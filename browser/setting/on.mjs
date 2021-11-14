export default function on () {

const note = this;

if ( note .output )
return;

const { context, program } = note;
const { dac, type, delay } = program;

note .output = dac ? context .destination : new window [ type + 'Node' ] ( context );
note .phase = context .currentTime + ( delay || 0 );

if ( note .output instanceof AudioScheduledSourceNode )
note .output .start ( note .phase );

return note;

};
