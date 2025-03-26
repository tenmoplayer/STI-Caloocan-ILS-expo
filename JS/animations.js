const buttons = document.querySelectorAll(".navButtons");
const slate = document.getElementById("headerPage");
const body = document.querySelector("body");
const logo = document.getElementById("logo");
// Target image

let activeButton = null; // Stores the last clicked button
const originalImage = "/IMAGES/logo.png"; // Set the original image

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const buttonText = event.currentTarget.textContent.trim().toUpperCase(); // Normalize text


        if (activeButton === event.currentTarget) {
            // If the same button is clicked again, close the header
            slate.classList.toggle("active");
            body.classList.toggle("active");
            
            // Reset image if header is closed
            if (!slate.classList.contains("active")) {
                logo.src = originalImage; // Revert to original image
                activeButton = null;
            }
        } else {
            // If a different button is clicked, ensure the header stays open
            slate.classList.add("active");
            body.classList.add("active");

            // Update active button
            activeButton = event.currentTarget;
        }
    });
});
