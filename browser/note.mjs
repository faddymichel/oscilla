function note ( key = 69, velocity = 63, delay = 0 ) {

const { setting, direction } = this;

switch ( direction ) {

case 144:

const instrument = setting .instrument [ key ] = Object .create ( setting .context );
const source = instrument .source = new OscillatorNode ( instrument );
const amplifier = instrument .amplifier = new GainNode ( instrument );
const destination = instrument .destination;

source .connect ( amplifier );
amplifier .connect ( destination );

source .start ( delay );

break;

case 128:

source .stop ( delay );

delete instrument [ key ];

}

};
