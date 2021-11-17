export default function climax ( scene ) {

const play = this;
const { action, context } = play;
const conflict = action [ scene .direction ];
const { previous } = scene;
const program = scene .program = previous ?.program ? previous .program .target : play .program;

if ( ! program )
return;

scene .setting = ! previous ? ( play .note = play .note || { context, program } ) : previous .setting .target || { context, program };

return conflict;

};
