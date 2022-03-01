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
}