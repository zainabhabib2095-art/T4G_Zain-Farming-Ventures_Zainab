
// ============================
// MOBILE MENU
// ============================
const navLinks = document.querySelector(".nav-links");

function toggleMenu() {
    navLinks.classList.toggle("active");
}


// ============================
// TOAST FUNCTION
// ============================
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}


// ============================
// FORM VALIDATION
// ============================
const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");
        let isValid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                input.style.border = "2px solid red";
                isValid = false;
            } else {
                input.style.border = "none";
            }
        });

        if (!isValid) {
            showToast("Please fill in all fields ❗");
            return;
        }

        const email = form.querySelector("input[type='email']");
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!email.value.match(emailPattern)) {
            showToast("Enter a valid email ❗");
            return;
        }

        showToast("Message sent successfully ✅");
        form.reset();
    });
}


// ============================
// BUTTON CLICK EFFECT
// ============================
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.95)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);
    });
});


// ============================
// SCROLL ANIMATION
// ============================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade-in").forEach(el => {
    observer.observe(el);
});