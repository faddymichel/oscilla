import { Scenario } from './scenario/index.js';

export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function create ( name, ... paths ) {

if ( typeof name !== 'string' )
return;

const scenarist = this;
const scenario = scenarist .scenario = scenarist .scenarios [ name ] = new Scenario ();

paths .forEach ( ( path ) => {

import ( path )
.then ( ( module ) => {

scenario .create (
module .character,
module .setting
);

} );

} );

};
