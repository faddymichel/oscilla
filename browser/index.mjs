window .onload = () => {

const setting = {};
const play = {};
const oscilla = Scenarist ( setting, play );

play .climax = function climax ( { direction: event }, ... act ) {

if ( event instanceof KeyboardEvent ) {

const element = document .body .appendChild ( document .createElement ( 'h2' ) );

element .textContent = `

Key: ${ event .key },
Key Code: ${ event .code }

`;

}

};

document .onkeydown = document .onkeyup = oscilla;

};
