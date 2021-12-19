instr design

SScore = ""
SWorkingDirectory pwd
SDesign sprintf "%s/design.sco", SWorkingDirectory

prints SDesign

read:

SLine, kLine readf SDesign
SScore strcatk SScore, SLine

/*
if kLine != -1 then

kLine = 1

endif

scoreline SLine, kLine
*/
;SScore strcatk SScore, SLine

;STemp = SScore
;SScore sprintfk "%s\n%s", STemp, SLine

cggoto kLine != -1, read

schedulek "score", 0, 0, SScore

turnoff

endin


instr score

SScore strget p4

iR readscore SScore

endin


schedule "design", 0, -1
