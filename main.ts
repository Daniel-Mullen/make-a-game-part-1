input.onButtonPressed(Button.A, function () {
    points += 1
})
input.onButtonPressed(Button.AB, function () {
    points += 3
})
input.onButtonPressed(Button.B, function () {
    points += 2
})
let points = 0
basic.forever(function () {
    basic.showNumber(points)
    if (points == 7) {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        basic.showString("WINNER")
        basic.pause(5000)
        basic.clearScreen()
    }
})
