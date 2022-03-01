const save=document.getElementById('savePost');
save.addEventListener('click', createPost );
const postName=document.getElementById('postName');
const paragraph=document.getElementById('paragraph');
const posts=document.getElementById('posts');
//console.log(save);
function createPost(){
    //console.log(paragraph,postName);
    ////////creating postControls buttons/////
    const editButton=document.createElement('button');
    editButton.setAttribute('id','edit');
    editButton.innerHTML='Edit';
    const deleteButton=document.createElement('button');
    deleteButton.setAttribute('id','delete');
    deleteButton.innerText='Delete';
    const controls=document.createElement('div');
    controls.setAttribute('id','postControls');
    controls.appendChild(editButton);
    controls.appendChild(deleteButton);
    ////// post  title and content/////////////
    const postTitle=document.createElement('h1');
    const postContent=document.createElement('p');
    postContent.setAttribute('class','paragraph');
    postTitle.setAttribute('class','postName');
    postContent.innerHTML=paragraph.value;
    postTitle.innerHTML=postName.value;
    ///////// append all thing to make complete post/////
    const post=document.createElement('div');
    post.setAttribute('id','post');
    post.appendChild(postTitle);
    post.appendChild(postContent);
    post.appendChild(controls);
    /////now post is complete to appent in posts /////
    posts.appendChild(post);
    console.log('end');
    //const path=require('path')
    //const loc=path.join(__dirname,"../index.html");
    //window.location(loc);


}/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////end of create Post script code/////////////////////
///////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////index page script///////////////////////////
// setting postion of body below navbar
const navbar=document.getElementById('nav')
let bound=navbar.getBoundingClientRect();
let container=document.getElementById('container');
container.style.marginTop=bound.bottom+40+'px';
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
    
    if(navbar.style.maxWidth==600)
    if (content.style.display === "table-row") {
      content.style.display = "none";
    } else {
      content.style.display = "table-row";
      content.style.float='left';
    }
    if (content1.style.display === "table-row") {
      content1.style.display = "none";
    } else {
      content1.style.display = "table-row";
    }
  });
}
//////////////////////////////////////////////////////////









