export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function scene ( character, setting ) {

const scenario = this;
const { name, cast, action } = character;
const role = Symbol ();

for ( let i = 0; i < cast .length; i++ ) {

scenario .scenes [ cast [ i ] ] = role;

}

scenario .scenes [ name ] = role;
scenario .scenes [ role ] = { action };
Object .assign ( scenario .setting, setting );

};
