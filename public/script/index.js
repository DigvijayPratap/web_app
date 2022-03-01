// setting postion of body below navbar
     //const navbar=document.getElementById('nav')
     //let bound=navbar.getBoundingClientRect();
     //let container=document.getElementById('container');
     //container.style.marginTop=bound.bottom+40+'px';
//end//////////////////////////////////////////
//////////////show hide navbar////////////////
     //var prevScrollpos = window.pageYOffset;
     //window.onscroll = function() {
     //var currentScrollPos = window.pageYOffset;
     //  if (prevScrollpos > currentScrollPos ) {
     //    document.getElementById("nav").style.top = "0";
     //  } else {
     //    document.getElementById("nav").style.top = "-100px";
     //  }
     //  prevScrollpos = currentScrollPos;
     //}
///////////////////////////////////////////////////
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("nav").style.padding = "15px 10px";
  }
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("nav").style.padding = "10px 10px";
  }
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.padding = "0px 10px";
  } else {
    document.getElementById("nav").style.padding = "20px 10px";
  }
}
//////////////////////////////////////////////////////
var coll = document.getElementsByClassName("webName");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content1 = this.nextElementSibling;
    var content = content1.nextElementSibling;
    let width = screen.width;
    console.log(width);
    if(width < 1200){
    if (content.style.display === "flex") {
      content.style.display = "none";
    } 
    else {
      content1.style.display = "flex";
      content1.style.flexDirection = "column";
    }
    if (content1.style.display === "flex") {
      content1.style.display = "none";
    } 
    else {
      content1.style.display = "flex";
      content1.style.flexDirection = "column";
    }
  }
  
  });
}
//////////////////////////////////////////////////////////









