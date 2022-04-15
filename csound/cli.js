#!/usr/bin/env node

const { spawn } = require ( 'child_process' );
const csound = spawn ( 'csound', [

'-F', 'otest.midi',
'oscilla.csd'

], {

cwd: __dirname + '/engine'

} );

csound .stdout .pipe ( process .stdout );
csound .stderr .pipe ( process .stderr );

csound .on ( 'close', code => console .log ( `Process exit with code: ${ code } ...` ) );
