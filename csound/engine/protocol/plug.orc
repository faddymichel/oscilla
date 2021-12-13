giDestinationInputDescriptor = $descriptor

opcode oPlug, 0, ajj

aSourceOutput, iOutputChannel, iInstance xin

if iOutputChannel == -1 then

iOutputChannel = $outputChannel

endif

if iInstance == -1 then

iInstance = $instance

endif

iChannel = $channel
iSourceModule = int ( p1 )
iTag = frac ( p1 )

if iTag == 0 then

iTag = iChannel / 1000 + iOutputChannel / 1000000

endif

SLinkLocator sprintf "%d/%d/%d", giLinkDescriptor, $program, iSourceModule

iDestinationModule chnget SLinkLocator

SDestinationInputLocator sprintf "%d/%d/%f/%d", giDestinationInputDescriptor, iInstance, iDestinationModule, iOutputChannel

chnset aSourceOutput, SDestinationInputLocator

iDestinationModule = iDestinationModule + iTag

schedule iDestinationModule, 0, - abs ( p3 ), $program, $channel, $key, $velocity, iOutputChannel, iInstance

endop


opcode oInput, a, j

iInput xin
p3 = abs ( p3 )

cggoto iInput > -1, inputFromChannel

iDestinationModule = int ( p1 )
iOutputChannel = $outputChannel

goto readInput

inputFromChannel:

SLinkLocator sprintf "%d/%d/%d", giLinkDescriptor, $program, int ( p1 )

iDestinationModule chnget SLinkLocator
iOutputChannel = iInput

readInput:

SDestinationInputLocator sprintf "%d/%d/%f/%d", giDestinationInputDescriptor, $instance, iDestinationModule, iOutputChannel

aSourceOutput chnget SDestinationInputLocator

cggoto iInput > -1, output

chnclear SDestinationInputLocator

output:

xout aSourceOutput

endop
