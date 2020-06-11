export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function tuning ( { steps, reference, keys } ) {

const oscilla = this;

const key = oscilla .key = {

steps: steps,
reference: reference,
keys: keys
};

let first = reference .frequency * 2 ** ( -reference .note / steps );
let last = reference .frequency * 2 ** ( ( steps - reference .note ) / steps );

const min = 20;
const max = 20000;

key .octave = {};
key .octave .min = 1;
key .octave .value = 1;

while ( first > min ) {

first /= 2;
key .octave .value++;

}

key .octave .max = key .octave .value;

while ( last < max ) {

last *= 2;
key .octave .max++;

}

for ( let note = 1; note <= keys; note++ ) {

key [ note ] = {};
key [ note ] .frequency = first * 2 ** ( note / steps );

}

};
