(function () {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("nav");
    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            var open = nav.classList.toggle("open");
            toggle.setAttribute("aria-expanded", open ? "true" : "false");
        });
        nav.addEventListener("click", function (e) {
            if (e.target.tagName === "A") {
                nav.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    /* Static contact form: compose an email in the visitor's own mail app.
       Keeps the site 100% static — no form backend required. */
    var form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            var name = document.getElementById("cf-name").value.trim();
            var email = document.getElementById("cf-email").value.trim();
            var message = document.getElementById("cf-message").value.trim();
            var subject = "Inquiry from " + name + " via zanthos.com";
            var body = message + "\n\n— " + name + "\n" + email;
            window.location.href = "mailto:contact@zanthos.com" +
                "?subject=" + encodeURIComponent(subject) +
                "&body=" + encodeURIComponent(body);
        });
    }
})();
