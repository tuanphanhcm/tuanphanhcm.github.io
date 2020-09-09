function clock(){
    var days = document.getElementById('days');
    var hours = document.getElementById('hour');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');

    var publishDate = new Date("Sep 30, 2020 22:30:30").getTime();
    var now = new Date().getTime();

    var remainingTime = publishDate - now;

    var d = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var h = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((remainingTime % (1000 * 60)) / 1000);

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

var interval= setInterval(clock, 1000);

interval;
