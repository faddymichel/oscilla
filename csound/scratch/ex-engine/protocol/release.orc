giReleaseDescriptor = $descriptor
giExtraTimeDescriptor = $descriptor

opcode oRelease, 0, ij

iInstrument, iDelay xin

SInstrument nstrstr int ( p1 )

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

;kActive active iInstrument

cggoto kReleased != 1, end

;if kExtraTime > 0 then

schedulek -p1, kExtraTime, 0

printf "Scheduled note off event for %s after %.3f ...\n", 1, SInstrument, kExtraTime

;else

;schedulek -p1, 0, 0

;printf "Scheduled note off event for %s immediately ...\n", 1, SInstrument

;endif

kReleased = -1

end:

endop
