giControllerDescriptor = $descriptor

opcode oPort, 0, iSSS

iProgram, SModule, SPort, SController xin
iModule nstrnum SModule
iController nstrnum SController

SControllerLocator sprintf "%f/%f/%f/%s", giControllerDescriptor, iProgram, iModule, SPort

chnset iController, SControllerLocator

endop
