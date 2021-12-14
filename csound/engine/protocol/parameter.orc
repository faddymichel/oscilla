giPortParameterDescriptor = $descriptor

#define parameterOpcode(rate) #

opcode oParameter_$rate, $rate, S

SParameter xin
SPort strget $port

SPortParameterLocator sprintf "%d/%d/%s/%s", giPortParameterDescriptor, $program, SPort, SParameter

$rate.Value chnget SPortParameterLocator

xout $rate.Value

endop

opcode oAssignment_$rate, 0, iSS$rate

iProgram, SPort, SParameter, $rate.Value xin

SPortParameterLocator sprintf "%d/%d/%s/%s", giPortParameterDescriptor, iProgram, SPort, SParameter

chnset $rate.Value, SPortParameterLocator

endop

#

$parameterOpcode(i)
$parameterOpcode(k)
