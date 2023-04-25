radio.onReceivedString(function (receivedString) {
    if (receivedString == "hello") {
        basic.showString("Hello!")
    }
    if (receivedString == "right") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 45)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    }
    if (receivedString == "left") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 45)
    }
    if (receivedString == "forward") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
    if (receivedString == "back") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    }
    if (receivedString == "stop") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    }
})
radio.setGroup(1)
