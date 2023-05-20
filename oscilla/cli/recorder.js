import Metronome from './metronome.js';

export default class Recorder extends Metronome {

$record () {

const sound = this;

sound .$set (

'RecorderStatus',
-1 * ( sound .get ( 'RecorderStatus' ) || -1 )

);

}

play () {



}

};
