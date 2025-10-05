/* ===================== Skills Accordion ===================== */
const skillCategories = document.querySelectorAll(".skill-category");

skillCategories.forEach(category => {
    category.addEventListener("click", () => {
        category.classList.toggle("active");
    });
});

/* ===================== Contact Form Character Counter ===================== */
const messageInput = document.getElementById("message");
const charCounter = document.getElementById("char-counter");
const progressBar = document.getElementById("progress-bar");

if (messageInput) {
    messageInput.addEventListener("input", () => {
        const maxChars = 300;
        const currentLength = messageInput.value.length;
        charCounter.textContent = `${currentLength} / ${maxChars} characters`;

        const percent = (currentLength / maxChars) * 100;
        progressBar.style.width = `${percent}%`;

        if (percent < 50) progressBar.style.background = "gray";
        else if (percent < 80) progressBar.style.background = "orange";
        else progressBar.style.background = "red";
    });
}

/* ===================== Contact Form Submission ===================== */
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
        contactForm.reset();
        progressBar.style.width = "0%";
        charCounter.textContent = "0 / 300 characters";
    });
}

/* ===================== Optional: Smooth Scroll for Navbar ===================== */
const navLinks = document.querySelectorAll("header .navbar a");
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        if (link.hash) {
            e.preventDefault();
            const target = document.querySelector(link.hash);
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

/* ===================== Dark/Light Mode Toggle ===================== */
const toggleBtn = document.getElementById("toggleMode");

if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            toggleBtn.textContent = "☀️ Light Mode";
        } else {
            toggleBtn.textContent = "🌙 Dark Mode";
        }
    });
}
