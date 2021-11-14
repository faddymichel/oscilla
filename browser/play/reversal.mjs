export default function reversal ( scene, ... act ) {

const { play, scenario: oscilla, resolution: note } = scene;

if ( ! note )
return;

delete scene .resolution;
scene .conflict = play .setting;

const target = note .target = oscilla .call ( scene, scene .direction, ... act );

if ( target ?.output )
note .output .connect ( target .output );

return note;

};
