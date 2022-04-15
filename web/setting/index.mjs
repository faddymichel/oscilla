import Note from './note/index.mjs';
import program from './program.mjs';

export default function Oscilla ( scene ) {

if ( ! ( scene .direction instanceof KeyboardEvent ) )
return;

const { program } = this;

scene .details = [ scene .direction .type === 'keydown' ? 'on' : 'off', program ];
scene .direction = 'Note';

};

Object .setPrototypeOf ( Oscilla .prototype, { program, Note } );
Object .defineProperty ( Oscilla .prototype, 'constructor', { value: Oscilla } );
