export const establishment = function establishment () {

navigator .requestMIDIAccess ()
.then ( ( midi ) => {

Object .defineProperty ( scenarist, 'midi', {

value: midi

} );

for ( const input of midi .inputs .values () ) {

input .onmidimessage = ( event ) => {

const [ command, note, velocity ] = event .data;
const scenarioEvent = {};
scenarioEvent .scene = command;
scenarioEvent .character = note;
scenarioEvent .action = velocity;

scenarist .play ( scenarioEvent );

};

}

} );

};
