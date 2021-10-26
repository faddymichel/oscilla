window .onload = () => {

const setting = {};
const play = {};
const oscilla = Scenarist ( setting, play );

play .climax = function climax ( event, ... act ) {

if ( event instanceof EventTarget ) {

const element = document .body .appendChild ( document .createElement ( 'h2' ) );

element .textContent = `New Event`;

}

};

document .onkeydown = document .onkeyup = oscilla;

};
