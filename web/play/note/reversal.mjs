export default async function reversal ( scene ) {

const { plot: oscilla, resolution: note } = scene;

if ( ! note )
return;

const target = oscilla ( scene .direction, ... scene .details );

note .then ( note => {

target .then ( target => {

if ( target ?.output )
note .output .connect ( target .output );

note .target = target;

} );

} );

return note;

};
