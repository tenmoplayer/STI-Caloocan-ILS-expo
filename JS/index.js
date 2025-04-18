
const video = document.querySelector(".scroll-video");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      video.play();
    } else {
      video.pause();
    }
  });
}, { threshold: 0.5 }); // Play when 50% of video is visible

observer.observe(video);


const navbar = document.getElementById('navbar')
function openSidebar(){
  navbar.classList.add('show')
}
function closeSidebar(){
  navbar.classList.remove('show')
}
function menu() {
  // Change this to your target HTML file
  window.location.href = "../HTML/menu.html";
}
function home() {
  // Change this to your target HTML file
  window.location.href = "../index.html";
}
function fb() {
  window.location.href = "https://www.instagram.com/fruitopia.food_corporation/?utm_source=ig_web_button_share_sheet";
}
function ig() {
  window.location.href = "https://www.facebook.com/profile.php?id=61573540895348#";
}