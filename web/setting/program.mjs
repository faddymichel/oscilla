const program = [];
export default program;

program .push ( {

node: 'signal',
type: 'Oscillator',
target: 'amplifier'

} );

program .push ( {

node: 'amplifier',
type: 'Gain',
target: 'dac'

} );

program .push ( {

node: 'modulator',
type: 'Oscillator',
target: [ 'amplifier', 'gain' ]

} );
