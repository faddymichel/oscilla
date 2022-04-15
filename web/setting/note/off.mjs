export default async function off () {

const note = this;

const { graph, context, module: { node, delay } } = note;

note .phase = context .currentTime + ( delay || 0 );

note .output .then ( output => {

if ( output instanceof AudioScheduledSourceNode ) {

output .stop ( note .phase );

observer ( 'Audio node stopped...' );

}

} )
.finally ( () => delete graph [ node ] );

return note;

};
