//Add an event listener to the button and listen for a 'click'
document.getElementById('button1').addEventListener('click', loadCustomerDetails);

function loadCustomerDetails() {
  //instantiate a new XHR object
  const xhr = new XMLHttpRequest();

  //use the open() method to initialize a newly-created request which takes in a method & url as mandatory parameters, and true as an optional parameter that determines whether the operation runs asynchronously
  xhr.open('GET', 'customer.json', true);

  //an event that is fired once the request transaction is completed successfully. if the HTTP response status code is 200, that is , the request succeeded, then parse the JSON text and store it in a variable called customerDetails. I then grabbed the div and inserted the details to display on the index page using template literals.
  xhr.onload = function () {
    if (this.status === 200) {
      const customerDetails = JSON.parse(this.responseText);
      
      document.getElementById('customer').innerHTML = `<ul>
        <li>Name: ${customerDetails.name}</li>
        <li>Company: ${customerDetails.company}</li>
        <li>Age: ${customerDetails.age}</li>
        <li>Hobbies: ${customerDetails.hobbies}</li>
      </ul>`
    }
  }
  //the send() method sends the request to the server
  xhr.send();
}

