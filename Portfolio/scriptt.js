document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    // Function to hide all sections
    function hideAllSections() {
        sections.forEach(section => {
            section.classList.add("hidden");
            section.classList.remove("visible", "animated");
        });
    }

    // Function to split content into four parts
    function splitContentIntoFour(section) {
        const content = section.querySelector(".content");
        if (!content) return;

        const text = content.innerHTML;
        const words = text.split(" ");

        // Split the content into four parts
        const quarterLength = Math.ceil(words.length / 4);
        const parts = [
            words.slice(0, quarterLength).join(" "),
            words.slice(quarterLength, quarterLength * 2).join(" "),
            words.slice(quarterLength * 2, quarterLength * 3).join(" "),
            words.slice(quarterLength * 3).join(" "),
        ];

        content.innerHTML = ""; // Clear the original content

        // Create four divs for each part
        parts.forEach((part, index) => {
            const div = document.createElement("div");
            div.classList.add("animated-part", `part-${index + 1}`);
            div.innerHTML = part;
            content.appendChild(div);
        });
    }

    // Event listener for navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = e.target.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);

            // Hide all sections and display the selected section
            hideAllSections();
            splitContentIntoFour(targetSection);
            targetSection.classList.remove("hidden");
            targetSection.classList.add("visible", "animated");
        });
    });

    // Initially hide all sections on page load
    hideAllSections();
});
