export const Descriptor = () => {

let octave = 0;

const descriptor = {};

descriptor .enumerable = true;

descriptor .set = function set ( value ) {

const { context, key, steps } = this;

//if ( value !== 1 && value !== -1 )
if ( value === 0 )
return;

octave += value;

for ( let note in key ) {

key [ note ]
.oscillator
.detune
.setValueAtTime (
parseInt ( octave * 100 * steps ),
context .currentTime
);

}

};

descriptor .get = function get () {

return octave;

};

return descriptor;

};
