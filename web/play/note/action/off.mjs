export default async function off () {

const note = this;
const { context, program: { delay } } = note;

note .phase = context .currentTime + ( delay || 0 );

if ( note .output instanceof AudioScheduledSourceNode )
note .output .stop ( note .phase );

delete note .output;

return note;

};
