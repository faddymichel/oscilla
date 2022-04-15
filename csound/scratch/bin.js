const { spawn } = require ( 'child_process' );
const csound = spawn ( 'csound', [

'-odac',
'oscilla.orc',
'test.sco'

], {

cwd: __dirname

} );

/*
csound .stdout .pipe ( process .stdout );
csound .stderr .pipe ( process .stderr );
*/

csound .on ( 'close', code => console .log ( `Process exit with code: ${ code } ...` ) );
