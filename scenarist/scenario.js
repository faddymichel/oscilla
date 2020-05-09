import { Scenario } from './scenario/index.js';

export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function scenario ( name, ... paths ) {

if ( typeof name !== 'string' && typeof name !== 'symbol' )
return;

const scenarist = this;
scenarist .scenarios [ name ] = new Scenario ();

for ( const path of paths )
import ( path )
.then ( ( scene ) => {

scenarist
.scenarios [ name ]
.scene (
scene
);

} );

};
