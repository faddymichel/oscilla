import observer from './observer.mjs';
import setting from './setting/index.mjs';
import play from './play/index.mjs';

window .onload = () => {

play .setting = setting;
const oscilla = Scenarist ( setting, play );

document .onkeydown = document .onkeyup = oscilla;

window .onerror = observer;

};
