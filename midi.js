export const establishment = function establishment () {

const { scenarist } = this;

navigator .requestMIDIAccess ()
.then ( ( midi ) => {

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
