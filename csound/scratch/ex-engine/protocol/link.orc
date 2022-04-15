giLinkDescriptor = $descriptor

opcode oLink, 0, iSS

iProgram, SSourceModule, SDestinationModule xin
iSourceModule nstrnum SSourceModule
iDestinationModule nstrnum SDestinationModule

SLinkLocator sprintf "%d/%d/%d", giLinkDescriptor, iProgram, iSourceModule

chnset iDestinationModule, SLinkLocator

endop
