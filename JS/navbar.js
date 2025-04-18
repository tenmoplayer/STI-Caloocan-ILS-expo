const navbar = document.getElementById('navbar')
function openSidebar(){
  navbar.classList.add('show')
}
function closeSidebar(){
  navbar.classList.remove('show')
}
function order() {
  // Change this to your target HTML file
  window.location.href = "../HTML/order.html";
}
function menu() {
  // Change this to your target HTML file
  window.location.href = "../HTML/menu.html";
}
function home() {
  // Change this to your target HTML file
  window.location.href = "../index.html";
}