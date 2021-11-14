import climax from './climax.mjs';
import reversal from './reversal.mjs';
import program from './program.mjs';

export default {

climax,
reversal,
program,
context: new ( window .AudioContext || window .WebkitAudioContext ) ()

};
