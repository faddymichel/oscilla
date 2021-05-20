import { on, off } from './note.js';

export default ( oscilla, actor, scale, standard ) => {

scale = scale .split ( '' );
standard = scale .indexOf ( standard );

if ( standard < 0 )
return;

oscilla ( 'scale', scale );

oscilla ( 'on', {}, 'keydown', 'mousedown', 'pointerdown' );
oscilla ( 'on', 'key', on, ... oscilla ( 'scale' ) );

oscilla ( 'off', {}, 'keyup', 'mouseup', 'pointerup' );
oscilla ( 'off', 'key', off, ... oscilla ( 'scale' ) );

document .onkeydown = document .onkeyup = ( { key, type } ) => oscilla ( type, key );

oscilla ( 'scale', 'map', ( key, step ) => {

const note = `note:oscilla{ key }`;

oscilla ( note, {} );
oscilla ( note, 'detune', step, 100 * ( step - standard )

}, key );

};
