import reversal from './reversal.mjs';
import on from './on.mjs';
import off from './off.mjs';

export default function Note ( scene ) {

const note = this;
const { previous } = scene;
let [ module, ... program ] = previous .program;

note .module = module;

scene .program = program;
scene .reversal = reversal;
scene .cue = program .node;
scene .sequence .push ( {

cue: module .target instanceof Array ? module .target [ 0 ] : module .target,
position: 'target'

} );

};

Object .setPrototypeOf ( Note .prototype, {

on, off,
graph: {},
context: new ( window .AudioContext || window .WebkitAudioContext ) ()

} );
Object .defineProperty ( Note .prototype, 'constructor', { value: Note } );
