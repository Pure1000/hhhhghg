loops.everyInterval(1000, function () {
    datalogger.log(
    datalogger.createCV("ºC", input.temperature()),
    datalogger.createCV("Sonido", input.soundLevel()),
    datalogger.createCV("Sonido dB", input.soundLevelDb()),
    datalogger.createCV("Luz", input.lightLevel())
    )
})
