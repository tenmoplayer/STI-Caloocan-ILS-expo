const navbar = document.getElementById('navbar')
function openSidebar(){
  navbar.classList.add('show')
}
function closeSidebar(){
  navbar.classList.remove('show')
}
function order() {
  window.location.href = "../HTML/order.html";
}
function menu() {
  window.location.href = "../HTML/menu.html";
}
function home() {
  window.location.href = "../index.html";
}
function ig() {
  window.location.href = "https://www.instagram.com/fruitopia.food_corporation/?utm_source=ig_web_button_share_sheet";
}
function fb() {
  window.location.href = "https://www.facebook.com/share/p/157gf44niS/";
}
