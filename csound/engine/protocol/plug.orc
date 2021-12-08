giDestinationInputDescriptor = $descriptor

opcode oPlug, 0, aj

aSourceOutput, iOutputChannel xin

if iOutputChannel == -1 then

iOutputChannel = $output

endif

iSourceModule = int ( p1 )
iInstance = frac ( p1 )

if iInstance == 0 then

iInstance = ( iOutputChannel + 1 ) / ( nchnls + 1 )

endif

SLinkLocator sprintf "%d/%d/%d", giLinkDescriptor, $program, iSourceModule

iDestinationModule chnget SLinkLocator
iDestinationModule = iDestinationModule + iInstance

SDestinationInputLocator sprintf "%d/%d/%f", giDestinationInputDescriptor, $instance, iDestinationModule

chnset aSourceOutput, SDestinationInputLocator

print iOutputChannel

schedule iDestinationModule, 0, p3, $program, $channel, $key, $velocity, iOutputChannel, $instance

endop


opcode oInput, a, 0

iDestinationModule = p1

SDestinationInputLocator sprintf "%d/%d/%f", giDestinationInputDescriptor, $instance, iDestinationModule

aSourceOutput chnget SDestinationInputLocator

chnclear SDestinationInputLocator

xout aSourceOutput

endop
