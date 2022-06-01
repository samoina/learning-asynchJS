//SYNCHRONOUS WAY, IT WILL OUTPUT Post one and Post two. it took 2 seconds to create post and one second to get post. 

const posts = [
  {title:'Post One', body: 'This is post one'},
  {title:'Post Two', body: 'This is post two'}
];

function createPost(post){
  setTimeout(function(){
    posts.push(post);
    console.log(posts);
  },2000)
}

function getPosts(){
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 3000)
}

createPost({title:'Post Three', body:'This is post three'});
getPosts();

//posts array will mimic our server. so we have a couple of posts then create two functions, one for creating a post and another for getting a post. We mimic server response time sith setTimeOut(). get posts is what we need to display the post inside of the browser. in the second function we need to loop through posts and for each iteration, we want to show the title of the post. then output it into the body. create the post then using createPost() and then call getPost(). this synchronous way will output Post one and Post two because it took 2 seconds to create post and one second to get post. if i put 3 seconds in the latter function, it npw works. to solve this, use callbacks to ensure that it works well. 

//ASYNCHRONOUS

