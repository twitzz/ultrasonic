function car_backward () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, 40)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, 40)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, 40)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, 40)
}
function LED_L () {
    mecanumRobot.setLed(LedCount.Left, LedState.ON)
    basic.pause(1000)
    mecanumRobot.setLed(LedCount.Left, LedState.OFF)
}
function car_left () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, 40)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, 40)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, 40)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, 40)
}
function car_forward () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, 40)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, 40)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, 40)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, 40)
}
function LED_R () {
    mecanumRobot.setLed(LedCount.Right, LedState.ON)
    basic.pause(1000)
    mecanumRobot.setLed(LedCount.Right, LedState.OFF)
}
function car_right () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, 40)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, 40)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, 40)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, 40)
}
let distance_left = 0
let distance_right = 0
let distance = 0
basic.showIcon(IconNames.Happy)
mecanumRobot.setServo(80)
basic.forever(function () {
    distance = mecanumRobot.ultra()
    if (distance < 20) {
        car_backward()
        basic.pause(200)
        mecanumRobot.state(MotorState.stop)
        basic.pause(500)
        mecanumRobot.setServo(0)
        basic.pause(500)
        distance_right = mecanumRobot.ultra()
        basic.pause(500)
        mecanumRobot.setServo(165)
        basic.pause(500)
        distance_left = mecanumRobot.ultra()
        basic.pause(500)
        if (distance_right > distance_left) {
            car_right()
            mecanumRobot.setServo(80)
            basic.pause(500)
            LED_R()
        } else {
            car_left()
            mecanumRobot.setServo(80)
            basic.pause(500)
            LED_L()
        }
    } else {
        car_forward()
    }
})
