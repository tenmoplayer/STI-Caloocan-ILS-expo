
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





























let list = " "
fetch('/JSON/products.json')
.then(response => response.json())
.then(json => {
    json.hopia.forEach(hopia => {
    list += `<li>${hopia.name}</li>`
  })
  document.querySelector("ul.test").innerHTML = list;
  console.log(json);
})