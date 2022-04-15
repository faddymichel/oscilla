export default async function reversal ( scene ) {

const { plot: oscilla, resolution: note } = scene;

if ( ! note )
return;

const target = oscilla ( scene .direction, ... scene .details );

note .then ( note => {

target .then ( async target => {

const noteOutput = await note .output;
const targetOutput = await target .output;

if ( targetOutput )
noteOutput .connect ( targetOutput );

note .target = target;

} );

} );

return note;

};
