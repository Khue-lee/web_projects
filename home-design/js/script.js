var btn = document.querySelector(".dropbtn");
var menu = btn.parentElement;
var phantom = document.querySelector(".nav-hidden");

// window.addEventListener('click', function(e){
//   if (e === menu) {
//     menu.classList.add("hidden");
//   } else {
//     menu.classList.remove("hidden");
//   }
// });

console.log("here");
btn.onclick = function () {
  if (phantom.classList.contains("hidden")) {
    console.log("asdfqwerzxcvasdfqwerzxcv");
    phantom.classList.remove("hidden");
  }
  else {
    phantom.classList.add("hidden");
  }
}
