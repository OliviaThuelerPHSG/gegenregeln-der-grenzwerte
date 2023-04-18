input.onButtonPressed(Button.A, function () {
    Toggler = 1
})
input.onButtonPressed(Button.B, function () {
    Toggler = 0
})
let Toggler = 0
let Grenzwert_Licht = 800
let Grenzwert_Temperatur = 600
basic.forever(function () {
    if (Toggler == 1) {
        basic.showNumber(0)
        if (pins.analogReadPin(AnalogPin.P0) >= Grenzwert_Temperatur) {
            basic.showIcon(IconNames.Sad)
        } else {
            basic.showString("Temp. OK")
        }
    } else {
        if (pins.analogReadPin(AnalogPin.P1) <= Grenzwert_Licht) {
            basic.showNumber(pins.analogReadPin(AnalogPin.P10))
            if (pins.analogReadPin(AnalogPin.P10) >= Grenzwert_Licht) {
                basic.showString("LICHT OK")
            } else {
                basic.showString("Licht Nicht OK")
            }
        } else {
            basic.showString("Licht OK")
        }
    }
})
basic.forever(function () {
    if (Toggler == 1) {
        basic.showNumber(pins.analogReadPin(AnalogPin.P0))
        if (pins.analogReadPin(AnalogPin.P0) <= 560) {
            pins.digitalWritePin(DigitalPin.P2, 1)
        } else {
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
    } else {
        basic.showNumber(pins.analogReadPin(AnalogPin.P1))
        if (pins.analogReadPin(AnalogPin.P1) <= 560) {
            pins.digitalWritePin(DigitalPin.P5, 1)
        } else {
            pins.digitalWritePin(DigitalPin.P5, 0)
        }
    }
})
