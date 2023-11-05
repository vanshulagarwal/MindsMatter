const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const btn = document.querySelector(".nav-btn");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  btn.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  btn.classList.remove("active");
}
var bookedEvents = [];

function bookSession(eventId) {
  var eventElement = document.getElementById(eventId);
  var eventName = eventElement.querySelector("h2").innerText;
  var eventDate = eventElement.querySelector("p").innerText;

  var confirmationElement = document.getElementById("confirmation");
  confirmationElement.innerHTML = `Session booked for ${eventName} on ${eventDate}.`;
  confirmationElement.style.display = "block";

  bookedEvents.push({ name: eventName, date: eventDate });
  var bookedEventsElement = document.getElementById("bookedEvents");
  bookedEventsElement.innerHTML = "";
  for (var i = 0; i < bookedEvents.length; i++) {
    var event = bookedEvents[i];
    bookedEventsElement.innerHTML += `<p>${event.name} - ${event.date}</p>`;
  }
}
