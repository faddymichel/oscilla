#!/usr/bin/env node

import Typist from '@faddymichel/typist';
import Oscilla from './cli/index.js';

new Typist ( {

greeting: 'Oscilla by Faddy Michel',
language: new Oscilla () [ Symbol .for ( 'language/shell' ) ] ()

} );
