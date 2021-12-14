giModulePortDescriptor = $descriptor

#define controllerOpcode(rate) #

opcode oController_$rate, $rate, S

SPort xin

iModule = int ( p1 )
SControllerLocator sprintf "%d/%d/%d/%s", giControllerDescriptor, $program, iModule, SPort
iController chnget SControllerLocator
iController = iController + frac ( p1 )

schedule iController, p2, p3, $program, $channel, $key, $velocity, $outputChannel, $instance, p1, SPort

SModulePortLocator sprintf "%d/%d/%f/%s", giModulePortDescriptor, $instance, p1, SPort

$rate.Value chnget SModulePortLocator

xout $rate.Value

endop

opcode oControl_$rate, 0, $rate

$rate.Value xin
SPort strget $port

SModulePortLocator sprintf "%d/%d/%f/%s", giModulePortDescriptor, $instance, $module, SPort

chnset $rate.Value, SModulePortLocator

endop

#

$controllerOpcode(i)
$controllerOpcode(k)
$controllerOpcode(a)
