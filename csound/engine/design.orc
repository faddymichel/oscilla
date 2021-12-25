SWorkingDirectory pwd
SDesign sprintf "%s/design.sco", SWorkingDirectory
SScore = ""

read:

SLine, iLine readfi SDesign
SScore strcat SScore, SLine

cigoto iLine != -1, read

iNothing readscore SScore
