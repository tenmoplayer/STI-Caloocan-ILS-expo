
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
