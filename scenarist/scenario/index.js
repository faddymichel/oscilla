import { descriptor as create } from './create.js';

export const Scenario = function Scenario () {

const scenario = this;

Object .defineProperty ( scenario, 'character', {

value: {}

} );
Object .defineProperty ( scenario, 'setting', {

value: {}

} );

};

Object .defineProperty ( Scenario .prototype, 'create', create );
