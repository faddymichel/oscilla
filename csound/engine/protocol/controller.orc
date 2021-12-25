giModulePortDescriptor = $descriptor

#define controllerOpcode(rate) #

opcode oController_$rate, $rate, S

SPort xin

iModule = int ( p1 )
SControllerLocator sprintf "%d/%d/%d/%s", giControllerDescriptor, $program, iModule, SPort
iController chnget SControllerLocator
iController = iController + frac ( p1 )

subinstrinit iController, $program, $channel, $key, $velocity, $instance, $counter, $outputChannel, p1, SPort
;schedule iController, 0, -1, $program, $channel, $key, $velocity, $instance, $counter, $outputChannel, p1, SPort

SModulePortLocator sprintf "%d/%d/%d/%d/%d/%s", giModulePortDescriptor, iModule, $instance, $counter, $outputChannel, SPort

$rate.Value chnget SModulePortLocator

xout $rate.Value

endop

opcode oControl_$rate, 0, $rate.j

$rate.Value, iExtraTime xin
SPort strget $port

SModulePortLocator sprintf "%d/%d/%d/%d/%d/%s", giModulePortDescriptor, int ( $module ), $instance, $counter, $outputChannel, SPort

chnset $rate.Value, SModulePortLocator

if iExtraTime > -1 then

SExtraTimeLocator sprintf "%d/%d/%d/%d", giExtraTimeDescriptor, $instance, $counter, $outputChannel

kExtraTime init iExtraTime

chnset kExtraTime, SExtraTimeLocator

endif

;oRelease p1, 0

endop

#

$controllerOpcode(i)
$controllerOpcode(k)
$controllerOpcode(a)
