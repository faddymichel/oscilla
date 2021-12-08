giControllerPortDescriptor = $descriptor

#define controllerOpcode(rate) #

opcode oController_$rate, $rate, S

SPort xin

iModule = int ( p1 )
SControllerLocator sprintf "%f/%f/%f/%s", giControllerDescriptor, $program, iModule, SPort
iController chnget SControllerLocator
iController = iController + frac ( p1 )

schedule iController, p2, p3, $program, $channel, $key, $velocity, $output, p1, SPort

SControllerPortLocator sprintf "%f/%f/%s", giControllerPortDescriptor, p1, SPort

$rate.Value chnget SControllerPortLocator

xout $rate.Value

endop

opcode oControl_$rate, 0, $rate

$rate.Value xin
SPort = $port
SControllerPortLocator sprintf "%f/%f/%s", giControllerPortDescriptor, $module, SPort

chnset $rate.Value, SControllerPortLocator

endop

#

$controllerOpcode(i)
$controllerOpcode(k)
$controllerOpcode(a)
