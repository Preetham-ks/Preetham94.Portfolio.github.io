document.addEventListener("DOMContentLoaded", () => {
    // Hide all sections initially
    document.querySelectorAll("section").forEach(section => {
        section.classList.add("hidden");
        section.classList.remove("visible");
    });

    // Navigation link click event
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = e.target.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);

            // Hide all sections
            document.querySelectorAll("section").forEach(section => {
                section.classList.add("hidden");
                section.classList.remove("visible");
            });

            // Show the target section with animation
            targetSection.classList.remove("hidden");
            targetSection.classList.add("visible");
        });
    });
});
