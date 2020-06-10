var targetDate = moment("08/08/2020");

var $days = $('#days'),
    $hours = $('#hours'),
    $minutes = $('#minutes'),
    $seconds = $('#seconds');

setInterval(function() {
    //calculate the time remaining
    var present = moment();
    timeLeft = moment.duration(targetDate.diff(present));
    updateClock(timeLeft);
}, 10);

function updateClock(remainingTime) {
    // Display time difference
    var days = remainingTime.asDays(),
        hours = Math.floor(remainingTime.asHours()) % 24,
        mins = Math.floor(remainingTime.asMinutes()) % 60,
        seconds = Math.floor(remainingTime.asSeconds()) % 60;

    $('#days').text(padNumber(days));
    $('#hours').text(padNumber(hours));
    $('#minutes').text(padNumber(mins));
    $('#seconds').text(padNumber(seconds));

}

function padNumber(number) {
    var formattedNum = number;
    if (number < 10) {
        formattedNum = "0" + formattedNum;
    }
    return formattedNum;
}