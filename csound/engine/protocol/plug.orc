giDestinationInputDescriptor = $descriptor

opcode oPlug, 0, ajjjj

aSourceOutput, iInstance, iCounter, iOutputChannel, iTag xin

tigoto end

if iInstance == -1 then

iInstance = $instance

endif

if iCounter == -1 then

iCounter = $counter

endif

if iOutputChannel == -1 then

iOutputChannel = $outputChannel

endif

if iTag == -1 then

iTag = frac ( p1 )

endif

iSourceModule = int ( p1 )

SLinkLocator sprintf "%d/%d/%d", giLinkDescriptor, $program, iSourceModule

iDestinationModule chnget SLinkLocator

SDestinationInputLocator sprintf "%d/%d/%d/%d/%d", giDestinationInputDescriptor, iDestinationModule, iInstance, iCounter, iOutputChannel

chnset aSourceOutput, SDestinationInputLocator

iDestinationModule = iDestinationModule + iTag

print iDestinationModule

;schedule iDestinationModule, 0, -1, $program, $channel, $key, $velocity, iInstance, iCounter, iOutputChannel
subinstrinit iDestinationModule, $program, $channel, $key, $velocity, iInstance, iCounter, iOutputChannel

;oRelease iDestinationModule
end:

endop


opcode oInput, a, 0

iDestinationModule = int ( p1 )

SDestinationInputLocator sprintf "%d/%d/%d/%d/%d", giDestinationInputDescriptor, iDestinationModule, $instance, $counter, $outputChannel

aSourceOutput chnget SDestinationInputLocator

chnclear SDestinationInputLocator

;oRelease p1

xout aSourceOutput

endop
