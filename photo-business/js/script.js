var container1 = document.getElementById("container1");
var fixed = container1.offsetTop;
var topnav = document.getElementById("topnav");
var navtwo = document.getElementById("topnav-phantom");


window.addEventListener('scroll', function(){
  if (window.pageYOffset >= fixed - 80) {
    topnav.classList.add("sticky");
    navtwo.style.display = "block";
    topnav.getElementsByTagName('a')[0].style.color = "white";
    topnav.getElementsByTagName('a')[1].style.color = "white";
    topnav.getElementsByTagName('a')[2].style.color = "white";
    topnav.getElementsByTagName('a')[3].style.color = "white";
  } else {
    topnav.classList.remove("sticky");
    navtwo.style.display = "none";
    topnav.getElementsByTagName('a')[0].style.color = "black";
    topnav.getElementsByTagName('a')[1].style.color = "black";
    topnav.getElementsByTagName('a')[2].style.color = "black";
    topnav.getElementsByTagName('a')[3].style.color = "black";
  }
});

var heart = document.querySelectorAll('.heart-box');

window.addEventListener('click', function(e){
  for(i=0; i<heart.length; i++) {
    if (heart[i] === e) {
      console.log("Clicked on heart-box");
      heart[i].getElementsByTagName("span").style.display = "block";
    }
  }
});


// heart.onclick = function(e){
//   console.log("Clicked on heart-box");
//   for (i=0; i<heart.length; i++) {
//     if (heart[i] === e) {
//
//     }
//   }
//   heart.getElementsByTagName("span").style.display = "block";
// };
