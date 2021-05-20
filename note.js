export default {

on: ( note, key ) => {

const oscilla = note .Owner;

if ( oscilla ( 'note', key, 'playing' ) === true )
return;

oscilla ( 'script', oscilla ( 'design', 'on' ), '..', 'note', key );

oscilla ( 'note', key, 'playing', true );

},

off: ( note, key ) => {

const oscilla = note .Owner;

oscilla ( 'note', {

configurable: true,
writable: true,
value: undefined

}, key );

}

};
