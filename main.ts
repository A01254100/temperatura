basic.forever(function () {
    if (10 == input.temperature()) {
        basic.showString("Vamos a esquiar")
    }
    if (20 == input.temperature()) {
        basic.showString("Hagamos un pitnic")
    }
    if (30 == input.temperature()) {
        basic.showString("Vamos a la playa")
    }
    if (40 == input.temperature()) {
        basic.showString("Mejor no salgas")
    }
    if (10 != input.temperature()) {
        basic.showString("" + (input.temperature()))
    }
    if (20 != input.temperature()) {
        basic.showString("" + (input.temperature()))
    }
    if (30 != input.temperature()) {
        basic.showString("" + (input.temperature()))
    }
    if (40 != input.temperature()) {
        basic.showString("" + (input.temperature()))
    }
})
