export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function scene ( { characters, setting } ) {

const scenario = this;
const { events, cast, action } = characters;
const role = Symbol ();

for ( let i = 0; i < cast .length; i++ )
scenario .scenes [ cast [ i ] ] = role;

if ( events && events .length > 0 )
for ( const event of events )
scenario .scenes [ event ] = role;

scenario .scenes [ role ] = { action };
Object .assign ( scenario .setting, setting );

};
