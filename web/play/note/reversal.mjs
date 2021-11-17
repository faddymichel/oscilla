export default function reversal ( scene ) {

const { plot: oscilla, resolution: note } = scene;

if ( ! note )
return;

const target = note .target = oscilla ( scene .direction, ... scene .details );

if ( target ?.output )
note .output .connect ( target .output );

return note;

};
