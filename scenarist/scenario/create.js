export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function create ( character, setting ) {

const scenario = this;
const { cast, action } = character;
const role = Symbol ();

for ( let i = 0; i < cast .length; i++ ) {

scenario .character [ cast [ i ] ] = role;

}

scenario .character [ role ] = { action };
Object .assign ( scenario .setting, setting );

};
