const buttons = document.querySelectorAll(".navButtons");
const slate = document.getElementById("headerPage");
const body = document.querySelector("body");
const logo = document.getElementById("logo");
const sections = {
    "ABOUT": document.getElementById("aboutContainer"),
    "MENU": document.getElementById("menuContainer"),
    "CONTACTS": document.getElementById("contactsContainer"),
    "ORDER NOW": document.getElementById("orderContainer")
};

let activeButton = null;
const originalImage = "/IMAGES/logo.png";
const transitionDuration = 800; 
let isTransitioning = false;

function showWithFade(element) {
    element.style.display = "flex";
    element.style.opacity = "0";
    element.style.visibility = "visible";
    setTimeout(() => {
        element.style.opacity = "1";
    }, 50);
}

function hideWithFade(element) {
    element.style.opacity = "0";
    element.style.visibility = "hidden";
    setTimeout(() => {
        element.style.display = "none";
    }, transitionDuration);
}

Object.values(sections).forEach(element => {
    element.style.opacity = "0";
    element.style.visibility = "hidden";
    element.style.display = "none";
    element.style.transition = `opacity ${transitionDuration / 1000}s ease-in-out, visibility ${transitionDuration / 1000}s ease-in-out`;
});

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        if (isTransitioning) return; 

        const buttonText = event.currentTarget.textContent.trim().toUpperCase();
        logo.src = originalImage;

        if (activeButton === event.currentTarget) {
            slate.classList.remove("active");
            body.classList.remove("active");
            Object.values(sections).forEach(hideWithFade);
            activeButton = null;
        } else {
            slate.classList.add("active");
            body.classList.add("active");
            Object.entries(sections).forEach(([key, element]) => {
                if (key === buttonText) {
                    showWithFade(element);
                } else {
                    hideWithFade(element);
                }
            });
            activeButton = event.currentTarget;
        }

        isTransitioning = true;
        setTimeout(() => {
            isTransitioning = false;
        }, transitionDuration);
    });
});

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const buttonText = event.currentTarget.textContent.trim().toUpperCase();
        if (sections[buttonText]) {
            logo.src = "../IMAGES/logo.png";
        }
    });
});

















const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const toggleText = dropdown.querySelector('p');
    const dropdownContent = dropdown.querySelector('.dropdowncontent');
    const parentContainer = document.querySelector('.menuContentscol1');

    toggleText.innerHTML = `+ ${toggleText.textContent}`;

    toggleText.addEventListener('click', () => {
        const isContentVisible = dropdownContent.style.display === 'block';

        dropdownContent.style.display = isContentVisible ? 'none' : 'block';

        toggleText.innerHTML = isContentVisible 
            ? `+ ${toggleText.textContent.slice(2)}` 
            : `− ${toggleText.textContent.slice(2)}`;


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
            toggleText.innerHTML = `+ ${toggleText.textContent.slice(2)}`; 
            parentContainer.style.height = 'auto';
        }
    });
});







document.addEventListener("DOMContentLoaded", function () {
    const missionVisionTab = document.querySelector(".missionvisionTab");
    const scrollCore = document.querySelector(".scrollCore");
    const listItems = document.querySelectorAll(".onclick");


    scrollCore.style.display = "none";

    listItems.forEach((item, index) => {
        item.addEventListener("click", function () {
            if (index === 0) { 
                fadeToggle(missionVisionTab, true);
                fadeToggle(scrollCore, false);
            } else if (index === 1) { 
                fadeToggle(missionVisionTab, false);
                fadeToggle(scrollCore, true);
            }
        });
    });

    function fadeToggle(element, show) {
        if (show) {
            element.style.display = "flex";
            element.style.opacity = 0;
            setTimeout(() => {
                element.style.transition = "opacity 0.5s ease-in-out";
                element.style.opacity = 1;
            }, 10);
        } else {
            element.style.transition = "opacity 0.5s ease-in-out";
            element.style.opacity = 0;
            setTimeout(() => {
                element.style.display = "none";
            }, 500);
        }
    }
});



const dropdownsmv = document.querySelectorAll('.dropdownmvcore');
dropdownsmv.forEach(dropdown => {
    
    const toggleText = dropdown.querySelector('p');
    const dropdownContent = dropdown.querySelector('.dropdownmvcorecontent');
    const parentContainer = document.querySelector('.aboutContentscol1');

    toggleText.innerHTML = `+ ${toggleText.textContent}`;

    toggleText.addEventListener('click', () => {
        const isContentVisible = dropdownContent.style.display === 'block';

        dropdownContent.style.display = isContentVisible ? 'none' : 'block';

        toggleText.innerHTML = isContentVisible 
            ? `+ ${toggleText.textContent.slice(2)}` 
            : `− ${toggleText.textContent.slice(2)}`;

        parentContainer.style.height = isContentVisible ? 'auto' : parentContainer.scrollHeight + 'px';
    });
});

window.addEventListener('click', (e) => {
    dropdownsmv.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.dropdownmvcorecontent');
        const toggleText = dropdown.querySelector('p');
        const parentContainer = document.querySelector('.aboutContentscol1');

        if (!dropdown.contains(e.target)) {
            dropdownContent.style.display = 'none';
            toggleText.innerHTML = `+ ${toggleText.textContent.slice(2)}`;
            parentContainer.style.height = 'auto';
        }
    });
});
function order() {
    window.location.href = "../HTML/order.html";
  }