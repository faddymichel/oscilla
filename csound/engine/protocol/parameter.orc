giControllerParameterDescriptor = $descriptor

#define parameterOpcode(rate) #

opcode oParameter_$rate, $rate, S

SParameter xin
iController = int ( p1 )

SControllerParameterLocator sprintf "%f/%f/%f/%s", giControllerParameterDescriptor, $program, iController, SParameter

$rate.Value chnget SControllerParameterLocator

xout $rate.Value

endop

opcode oAssignment_$rate, 0, iSS$rate

iProgram, SController, SParameter, $rate.Value xin
iController nstrnum SController

SControllerParameterLocator sprintf "%f/%f/%f/%s", giControllerParameterDescriptor, iProgram, iController, SParameter

chnset $rate.Value, SControllerParameterLocator

endop

#

$parameterOpcode(i)
$parameterOpcode(k)
