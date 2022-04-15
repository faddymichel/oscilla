giHandle OSCinit 1313

instr listen

SLine init ""

kScore OSClisten giHandle, "/score", "s", SLine

scoreline SLine, kScore

endin
