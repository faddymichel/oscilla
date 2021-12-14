giControllerDescriptor = $descriptor

opcode oPort, 0, iSSS

iProgram, SModule, SPort, SController xin
iModule nstrnum SModule
iController nstrnum SController

SControllerLocator sprintf "%d/%d/%d/%s", giControllerDescriptor, iProgram, iModule, SPort

chnset iController, SControllerLocator

endop
