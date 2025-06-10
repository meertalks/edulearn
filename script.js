// Contact form submit handler
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    contactForm.reset();
  });
}

// Login form submit handler
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Simple hardcoded authentication
    if (username === "admin" && password === "admin123") {
      alert("Login successful! Welcome, Admin.");
    } else {
      alert("Invalid username or password. Try again.");
    }

    loginForm.reset();
  });
}

// Smooth scroll (optional if CSS handles scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // adjust for header height if needed
        behavior: "smooth"
      });
    }
  });
});
