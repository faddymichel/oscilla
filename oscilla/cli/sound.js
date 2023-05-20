import { spawn } from 'child_process';
import { createInterface } from 'readline';
import { parse } from 'path';
import Scenarist from '@faddymichel/scenarist';
import Metronome from './metronome.js';
import Controller from './controller.js';

export default class Sound extends Metronome {

set setting ( path ) {

const sound = this;



}

on = false

$on () {

const sound = this;

sound .process = spawn ( 'csound', Sound .options );
sound .interface = createInterface ( { input: sound .process .stderr } );
sound .reactor = Scenarist ( {

script: sound,
director: true

} );

sound .interface .on ( 'line', line => {

try {

sound .reactor ( ... line .trim () .split ( /\s+/ ) );

} catch ( error ) {}

} );

// sound .process .stderr .pipe ( process .stderr );

sound .on = true;

super .$on ();

}

$off () {

const sound = this;

sound .$score ( 'i "exit" 0 0' );

sound .on = false;

}

static location = parse ( import .meta .url ) .dir .replace ( 'file://', '' ) + '/..'

static options = [

'-Lstdin',
'-Ma',
'--omacro:location=' + Sound .location,
Sound .location + '/index.csd'

]

};
