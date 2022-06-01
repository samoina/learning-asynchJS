document.querySelector('.get-jokes').addEventListener('click', loadJokes);

function loadJokes(ev){
  const number = parseInt(document.querySelector('#number').value);
 
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://api.icndb.com/jokes/random/<number>', true);

  xhr.onload = function(){
    const joke = JSON.parse(this.responseText);
    console.log(joke.value);
  }
  xhr.send();

  ev.preventDefault();
}