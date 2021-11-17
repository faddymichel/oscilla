import play from './play/index.mjs';

window .onload = () => {

const oscilla = Scenarist ( play );

document .onkeydown = document .onkeyup = oscilla;

window .onerror = observer;

};
