import Language from '@faddymichel/language';
import { mkdir } from 'fs/promises';
import Sound from './sound.js';

export default class Oscilla extends Language {

async Sound ( name ) {

const { setting: { shell, script: oscilla } } = this ( Symbol .for ( 'scenarist/details' ) );

oscilla .sounds = oscilla .sounds || 0;
name = typeof name === 'string' && name .length ? name : 'sound-' + ++oscilla .sounds;

try {

await mkdir ( name );

} catch ( error ) {

if ( error .code !== 'EEXIST' )
throw error;

}

const sound = oscilla [ '$' + name ] = new Sound ();

sound .$on ();

return shell ( name, '.' );

}

};
