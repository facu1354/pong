input.onButtonPressed(Button.A, function () {
    PALETA_1.move(-1)
    PALETA2.move(-1)
})
input.onButtonPressed(Button.B, function () {
    PALETA_1.move(1)
    PALETA2.move(1)
})
let PALETA2: game.LedSprite = null
let PALETA_1: game.LedSprite = null
PALETA_1 = game.createSprite(2, 4)
PALETA2 = game.createSprite(3, 4)
basic.forever(function () {
	
})
