import { spawn } from 'child_process';
import { createInterface } from 'readline';
import { parse } from 'path';
import Scenarist from '@faddymichel/scenarist';
import Metronome from './metronome.js';
import Controller from './controller.js';

export default class Synthesizer {

$start () {

const synthesizer = this;

synthesizer .process = spawn ( 'csound', Synthesizer .options );
synthesizer .controller = new Controller ( synthesizer .process .stdin );
synthesizer .output = createInterface ( { input: synthesizer .process .stderr } );
synthesizer .reactor = Scenarist ( {

script: synthesizer,
director: true

} );
synthesizer .$metronome = new Metronome ( synthesizer .controller );

synthesizer .output .on ( 'line', line => {

try {

synthesizer .reactor ( ... line .trim () .split ( /\s+/ ) );

} catch ( error ) {}


} );

// synthesizer .process .stderr .pipe ( process .stderr );

synthesizer .process .on ( 'close', () => {

for ( const key of Object .keys ( Object .getOwnPropertyDescriptors ( synthesizer ) ) )
delete synthesizer [ key ];

} );

}

$stop () {

const synthesizer = this;

this .controller .log ( 'i "exit" 0 0' );

}

static location = parse ( import .meta .url ) .dir .replace ( 'file://', '' ) + '/..'

static options = [

'-Lstdin',
'--omacro:location=' + Synthesizer .location,
Synthesizer .location + '/index.csd'

]

};
