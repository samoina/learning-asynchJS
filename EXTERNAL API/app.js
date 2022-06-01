document.querySelector('.get-jokes').addEventListener('click', loadJokes);

function loadJokes(ev) {
  const number = parseInt(document.querySelector('#number').value);

  //initialize a newly-created request
  const xhr = new XMLHttpRequest();

  // xhr.open('GET', 'http://api.icndb.com/jokes/random/<number>', true);

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  //what do we want to do with this data
  xhr.onload = function () {
    if (this.status === 200) {
      const joke = JSON.parse(this.responseText);
      console.log(joke);
    }
  }
  xhr.send();

  ev.preventDefault();
}