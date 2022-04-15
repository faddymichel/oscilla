giReleaseDescriptor = $descriptor
giExtraTimeDescriptor = $descriptor

opcode oRelease, 0, ij

iInstrument, iDelay xin

SInstrument nstrstr int ( iInstrument )

kReleased init 0

cggoto kReleased == -1, end

SReleaseLocator sprintf "%d/%d", giReleaseDescriptor, $instance

kReleased chnget SReleaseLocator

cggoto iDelay > -1, delay

SExtraTimeLocator sprintf "%d/%d/%d/%d", giExtraTimeDescriptor, $instance, $counter, $outputChannel

kExtraTime chnget SExtraTimeLocator

goto schedule

delay:

kExtraTime init iDelay

schedule:

kActive active iInstrument

cggoto kReleased != 1 || kActive == 0, end

schedulek -iInstrument, kExtraTime, 0

SInstrument nstrstr int ( iInstrument )

kReleased = -1

end:

endop
