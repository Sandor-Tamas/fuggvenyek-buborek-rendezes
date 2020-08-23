function rendez () {
    for (let i = 0; i <= elemszam - 2; i++) {
        for (let j = 0; j <= elemszam - 2 - i; j++) {
            if (szamok[j] > szamok[j + 1]) {
                temp = szamok[j]
                szamok[j] = szamok[j + 1]
                szamok[j + 1] = temp
                csere = 1
            }
        }
        if (csere == 1) {
            csere = 0
        } else {
            break;
        }
    }
}
function kiir () {
    for (let index = 0; index <= elemszam - 1; index++) {
        basic.showNumber(szamok[index])
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
    }
}
function feltolt () {
    for (let index = 0; index <= elemszam - 1; index++) {
        szamok[index] = randint(0, 9)
    }
    return 0
}
let csere = 0
let temp = 0
let elemszam = 0
let szamok: number[] = []
szamok = []
let i = 0
let j = 0
elemszam = 5
temp = 0
csere = 0
feltolt()
basic.showString("alap")
kiir()
rendez()
basic.showString("rendezett")
kiir()
basic.forever(function () {
	
})
