const buttons = document.querySelectorAll(".navButtons");
const slate = document.getElementById("headerPage");
const body = document.querySelector("body");
const logo = document.getElementById("logo");
const aboutContainer = document.getElementById("aboutContainer");
const menuContainer = document.getElementById("menuContainer");

let activeButton = null;
const originalImage = "/IMAGES/logo.png";
const transitionDuration = 800; // Smooth transition time
let isTransitioning = false;

// Function to show element with fade-in effect
function showWithFade(element) {
    element.style.display = "block"; // Ensure it's visible in layout
    element.style.opacity = "0"; // Start fully transparent
    element.style.visibility = "visible";

    setTimeout(() => {
        element.style.opacity = "1"; // Gradually fade in
    }, 50);
}

// Function to hide element with fade-out effect
function hideWithFade(element) {
    element.style.opacity = "0";
    element.style.visibility = "hidden";

    setTimeout(() => {
        element.style.display = "none"; // Fully hide after transition
    }, transitionDuration);
}

// Apply default styles for fade effect
[aboutContainer, menuContainer].forEach(element => {
    element.style.opacity = "0";
    element.style.visibility = "hidden";
    element.style.display = "none";
    element.style.transition = `opacity ${transitionDuration / 1000}s ease-in-out, visibility ${transitionDuration / 1000}s ease-in-out`;
});

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        if (isTransitioning) return; // Prevent fast spam-clicks

        const buttonText = event.currentTarget.textContent.trim().toUpperCase();
        logo.src = originalImage;

        if (activeButton === event.currentTarget) {
            // If clicking the same button again, close everything
            slate.classList.remove("active");
            body.classList.remove("active");
            hideWithFade(aboutContainer);
            hideWithFade(menuContainer);
            activeButton = null;
        } else {
            // Allow transition even if another section is open
            slate.classList.add("active");
            body.classList.add("active");

            if (buttonText === "ABOUT") {
                hideWithFade(menuContainer); // Fade out menu
                showWithFade(aboutContainer); // Fade in about
            } else if (buttonText === "MENU") {
                hideWithFade(aboutContainer); // Fade out about
                showWithFade(menuContainer); // Fade in menu
            } else {
                hideWithFade(aboutContainer);
                hideWithFade(menuContainer);
            }

            activeButton = event.currentTarget;
        }

        // Allow new clicks after a small delay (prevents spam-click issues)
        isTransitioning = true;
        setTimeout(() => {
            isTransitioning = false;
        }, transitionDuration);
    });
});



const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const toggleText = dropdown.querySelector('p');
    const dropdownContent = dropdown.querySelector('.dropdowncontent');
    const parentContainer = document.querySelector('.menuContentscol1');

    // Initialize plus sign
    toggleText.innerHTML = `+ ${toggleText.textContent}`;

    toggleText.addEventListener('click', () => {
        const isContentVisible = dropdownContent.style.display === 'block';

        // Toggle visibility
        dropdownContent.style.display = isContentVisible ? 'none' : 'block';

        // Update symbol
        toggleText.innerHTML = isContentVisible 
            ? `+ ${toggleText.textContent.slice(2)}` 
            : `− ${toggleText.textContent.slice(2)}`;

        // Adjust the parent container height
        parentContainer.style.height = isContentVisible ? 'auto' : parentContainer.scrollHeight + 'px';
    });
});

window.addEventListener('click', (e) => {
    dropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.dropdowncontent');
        const toggleText = dropdown.querySelector('p');
        const parentContainer = document.querySelector('.menuContentscol1');

        if (!dropdown.contains(e.target)) {
            dropdownContent.style.display = 'none';
            toggleText.innerHTML = `+ ${toggleText.textContent.slice(2)}`; // Reset to plus
            parentContainer.style.height = 'auto';
        }
    });
});

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const buttonText = event.currentTarget.textContent.trim().toUpperCase(); // Normalize text

        // Change image based on button clicked
        switch (buttonText) {
            case "ABOUT":
                logo.src = '../IMAGES/logo.png';
                break;
            case "CONTACTS":
                logo.src = "../IMAGES/logo.png";
                break;
            case "MENU":
                logo.src = "../IMAGES/logo.png";
                break;
            case "ORDER NOW":
                logo.src = "../IMAGES/logo.png";
                break;
        }
    });
});