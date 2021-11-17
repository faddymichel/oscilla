export default function climax ( scene ) {

if ( ! ( scene .direction instanceof KeyboardEvent ) )
return;

const play = this;
const conflict = play .note;

scene .direction = scene .direction .type === 'keydown' ? 'on' : 'off';

return conflict;

};
