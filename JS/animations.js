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

        // Change image based on button clicked
        switch (buttonText) {
            case "ABOUT":
                logo.src = "/IMAGES/logo.png";
                break;
            case "CONTACTS":
                logo.src = "/IMAGES/logo.png";
                break;
            case "MENU":
                logo.src = "/IMAGES/logo.png";
                break;
            case "ORDER NOW":
                logo.src = "/IMAGES/logo.png";
                break;
        }

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

const dropdowns = document.querySelectorAll('.dropdown');

        // Loop through each dropdown and add a click event listener to the <p> tag
        dropdowns.forEach(dropdown => {
            const toggleText = dropdown.querySelector('p');
            const dropdownContent = dropdown.querySelector('.dropdowncontent');
            const parentContainer = document.querySelector('.menuContentscol1');
            
            toggleText.addEventListener('click', () => {
                // Toggle the visibility of the dropdown content
                const isContentVisible = dropdownContent.style.display === 'block';
                dropdownContent.style.display = isContentVisible ? 'none' : 'block';

                // Adjust the parent container's height when the dropdown content is displayed
                if (!isContentVisible) {
                    parentContainer.style.height = parentContainer.scrollHeight + 'px';
                } else {
                    parentContainer.style.height = 'auto'; // Reset to auto when hidden
                }
            });
        });

        // Optional: Close the dropdown if clicking anywhere outside
        window.addEventListener('click', (e) => {
            dropdowns.forEach(dropdown => {
                const dropdownContent = dropdown.querySelector('.dropdowncontent');
                const toggleText = dropdown.querySelector('p');
                const parentContainer = document.querySelector('.menuContentscol1');

                if (!dropdown.contains(e.target)) {
                    dropdownContent.style.display = 'none';
                    parentContainer.style.height = 'auto'; // Reset height when closed
                }
            });
        });