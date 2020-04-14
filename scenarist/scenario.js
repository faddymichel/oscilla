import { Scenario } from './scenario/index.js';

export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function scenario ( name, ... paths ) {

if ( typeof name !== 'string' && typeof name !== 'symbol' )
return;

const scenarist = this;
scenarist .scenarios [ name ] = new Scenario ();

paths .forEach ( ( path ) => {

import ( path )
.then ( ( module ) => {

scenarist
.scenarios [ name ]
.scene (
module .character,
module .setting
);

} );

} );

};
