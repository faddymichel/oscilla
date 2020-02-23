const Descriptor = () => {

let loudness;
const descriptor = {};

descriptor .get = function get () {

return loudness;

};

descriptor .set = function set ( value ) {

loudness = value;
const { context, amplifier } = this;

amplifier
.gain
.setValueAtTime (
loudness,
context .currentTime
);

};

return descriptor;

};
