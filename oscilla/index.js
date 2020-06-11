import { descriptor as tuning } from './tuning.js';
import { descriptor as partial } from './partial.js';
//import { descriptor as timbre } from './timbre.js';
import { descriptor as focus } from './focus.js';
import { descriptor as tune } from './tune.js';
import { descriptor as attack } from './attack.js';
import { descriptor as release } from './release.js';
import { descriptor as modulation } from './modulation.js';
import { descriptor as loudness } from './loudness.js';
import { descriptor as wave } from './wave.js';
import { descriptor as detune } from './detune.js';
import { descriptor as set } from './set.js';

const Context = window .AudioContext || window .WebkitAudioContext;

export const Oscilla = class Oscilla  extends Context {

constructor () {

super ();

const oscilla = this;

oscilla .timbre = new Cursor ();
oscilla .engine = new Cursor ();

oscilla .multiphonic = false;

}

};

Object .defineProperty ( Oscilla .prototype, 'tuning', tuning );
Object .defineProperty ( Oscilla .prototype, 'partial', partial );
//Object .defineProperty ( Oscilla .prototype, 'timbre', timbre );
Object .defineProperty ( Oscilla .prototype, 'focus', focus );
Object .defineProperty ( Oscilla .prototype, 'modulation', modulation );
Object .defineProperty ( Oscilla .prototype, 'loudness', loudness );
Object .defineProperty ( Oscilla .prototype, 'tune', tune );
Object .defineProperty ( Oscilla .prototype, 'detune', detune );
Object .defineProperty ( Oscilla .prototype, 'wave', wave );
Object .defineProperty ( Oscilla .prototype, 'attack', attack );
Object .defineProperty ( Oscilla .prototype, 'release', release );
Object .defineProperty ( Oscilla .prototype, 'set', set );

for ( const event of [

'wave',
'detune'

] ) {

Object .defineProperty ( Oscilla .prototype, 'on' + event .toLowerCase (), {

enumerable: true,
set: function set ( listener ) {

const oscilla = this;

oscilla .addEventListener ( event, listener, false );

}

} );

}
