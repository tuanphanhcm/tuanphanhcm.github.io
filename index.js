function clock() {
  var days = document.getElementById("days");
  var hours = document.getElementById("hour");
  var minutes = document.getElementById("minutes");
  var seconds = document.getElementById("seconds");

  var startDate = new Date("May 17, 2021 00:00:00").getTime();
  var now = new Date().getTime();

  var workFromHomeTime = now - startDate;

  var d = Math.floor(workFromHomeTime / (1000 * 60 * 60 * 24));
  var h = Math.floor(
    (workFromHomeTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var m = Math.floor((workFromHomeTime % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((workFromHomeTime % (1000 * 60)) / 1000);

  days.innerHTML = d;
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}

var interval = setInterval(clock, 1000);

interval;
