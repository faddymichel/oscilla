export default function climax ( scene, key = 69, velocity = 64, delay = 0 ) {

const { play, setting, direction } = scene;

if ( ! direction instanceof KeyboardEvent )
return;

const { action, context } = play;
const conflict = direction .type === 'keydown' ? action .on : action .off;
const program = scene .program = scene .program ? scene .program .target : play .program;

if ( ! program )
return;

//const note = scene .note = scene .note ? scene .note .target : play .note || ( play .note = { context, program } );

if ( ! play .note )
scene .note = play .note = { context, program };

else if ( ! scene .note )
scene .note = play .note;

else
scene .note = scene .note .target || { context, program };

scene .setting = scene .note;

return conflict;

};
