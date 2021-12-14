i "link" 0 0 0 "oscilla" "mOscillator"
i "link" 0 0 0 "mOscillator" "mOut"

i "port" 0 0 0 "mOscillator" "envelope" "cADSR"

i "parameter_i" 0 0 0 "envelope" "attack" .1
i "parameter_i" 0 0 0 "envelope" "decay" .1
i "parameter_i" 0 0 0 "envelope" "sustain" .3
i "parameter_i" 0 0 0 "envelope" "release" .1

s

i "oscilla" 0 1 0 1 69 63
i "oscilla" 0.5 1 0 1 57 63
