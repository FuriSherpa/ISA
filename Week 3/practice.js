// 1. WAP that runs Promise object and accepts/rejects according to the condition. If (x>10) accepts, else reject
// Define the object
const acceptGreaterThanTen = {
    // Define the function that checks the input
    checkInput: function(x) {
      if (x > 10) {
        return "Accepted!";
      } else {
        return "Rejected!";
      }
    }
  }
  
  // Example usage
  console.log(acceptGreaterThanTen.checkInput(15)); // Outputs "Accepted!"
  console.log(acceptGreaterThanTen.checkInput(5)); // Outputs "Rejected!"


// 2. WAP to form a callback function to perform multiple calculation and give a total at the end
function calculateTotal(numbers, callback) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total = callback(total, numbers[i]);
    }
    return total;
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  
  const add = (total, number) => total + number;
  const subtract = (total, number) => total - number;
  const multiply = (total, number) => total * number;
  
  const sum = calculateTotal(numbers, add); // Returns 15
  const difference = calculateTotal(numbers, subtract); // Returns -13
  const product = calculateTotal(numbers, multiply); // Returns 120
  
  console.log(sum);
  console.log(difference);
  console.log(product);


// 3. Connect the XML file through XML HTTP Request the XML file have just a table (colors as you wish)
// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Set the request method and URL
xhr.open('GET', 'colors.xml', true);

// Set the response type to 'document' to indicate that the server will return an XML document
xhr.responseType = 'document';

// Define a callback function to handle the response
xhr.onload = function() {
  // Check that the request was successful
  if (xhr.status === 200) {
    // Retrieve the XML document from the response
    var xmlData = xhr.responseXML;

    // Retrieve the table element from the XML document
    var table = xmlData.getElementsByTagName('table')[0];

    // Retrieve the rows of the table
    var rows = table.getElementsByTagName('tr');

    // Loop through the rows and display the color data
    for (var i = 0; i < rows.length; i++) {
      var cells = rows[i].getElementsByTagName('td');
      var color = cells[0].textContent;
      var hex = cells[1].textContent;

      console.log('Color:', color, 'Hex:', hex);
    }
  } else {
    console.log('Error:', xhr.status);
  }
};

// Send the request to the server
xhr.send();