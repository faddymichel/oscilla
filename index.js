import Typist from '/typist/typist.js';

import tune from './tune.js';
import produce from './produce.js';

import Sound from './sound.js'

const Oscilla = Typist .produce ();

Oscilla ( 'page', document, 'document', 'dom' );

Oscilla ( 'tune', tune );

Oscilla ( 'produce', produce );

window .onload = () => {

const oscilla = Oscilla .produce ();

oscilla ( 'tune', `qasedrfjikolp;']`, 'l' );

};
