import action from './action/index.mjs';
import climax from './climax.mjs';
import reversal from './reversal.mjs';
import program from './program.mjs';

export default {

action,
climax,
reversal,
program,
context: new ( window .AudioContext || window .WebkitAudioContext ) ()

};
