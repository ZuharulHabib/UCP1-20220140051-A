// Update greeting based on current time
var today = new Date();
var hourNow = today.getHours();

var greeting;
if (hourNow >= 18) {
  greeting = 'Good evening!';
} else if (hourNow >= 12) {
  greeting = 'Good afternoon!';
} else if (hourNow >= 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Hello!';
}

document.getElementById('greeting').innerHTML = greeting;

// Update datetime
function updateDateTime() {
  var now = new Date();
  var dateTimeString = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) + ' | ' + now.toDateString();
  document.getElementById('datetime').innerHTML = dateTimeString;
}

// Update datetime every second
setInterval(updateDateTime, 1000);
