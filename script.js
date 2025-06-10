// Optional: You can add more interactivity here
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent! We'll get back to you soon.");
  this.reset();
});
