import { Scenario } from './scenario/index.js';

export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function create () {

const scenarist = this;
scenarist .scenario = new Scenario ();

return scenarist .scenario;

};
