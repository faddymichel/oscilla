const Note = function Note ( module ) {

this .module = module;

};

Note .prototype = {

graph: {},
context: new ( window .AudioContext || window .WebkitAudioContext ) ()

};

export default Note;
