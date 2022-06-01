document.querySelector('.get-jokes').addEventListener('click', loadJokes);

function loadJokes(ev) {
  const number = parseInt(document.querySelector('#number').value);

  const xhr = new XMLHttpRequest();
  //NOTE1
  // xhr.open('GET', 'http://api.icndb.com/jokes/random/<number>', true);

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  //NOTE 2
  xhr.onload = function () {
    if (this.status === 200) {
      const joke = JSON.parse(this.responseText);
      console.log(joke.value);
      let jokeArr = joke.value;
      let listJokes = document.querySelector('.jokes');

      if (joke.type === 'success') {
        for (let i = 0; i < jokeArr.length; i++) {
          let listItem = document.createElement('li');
          let jokeItem = document.createTextNode(jokeArr[i].joke);
          listItem.appendChild(jokeItem);
          listJokes.appendChild(listItem);
        }
      }
    }
  }
  xhr.send();

  ev.preventDefault();
}


/*NOTE 1
i was making a mistake here because I put in a number, say 23, thinking it would bring the 23rd joke, but it is meant to bring 23 random jokes in an array form 

NOTE 2
the xhr.onload is for what we want to do with the information we get from the website. The idea was to display the jokes on the website, so i created a variable for the ul on the html page. the jokes are stored in array form in joke.value (jokeArr). this is what I will loop over using a for-loop. i created a list element, and a text node with the specific joke. I then appended the textnode onto the list item, and the list item onto the ul

*/
