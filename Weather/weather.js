// Declaring a variable named "weather" as an object with properties and methods
let weather = {
    // Add a fetchWeather method to the object that takes a city parameter
    fetchWeather: function (city) {
      // Call the fetch method and pass the API URL with city
      fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=c9e2aa18663c865d1aaea024b6e1b1a2")
        .then((response) => { // If the response is not ok, shows an alert and throw an error
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          // If the response is ok, parse the response as JSON and pass the data to the displayWeather method
          return response.json();
        })
        .then((data) => this.displayWeather(data))
        .catch(error =>{
            console.log(error);
        });
    },
    // Add a displayWeather method to the object that takes a data parameter
    displayWeather: function (data) {
      // Destructure the data object and assign the values to corresponding variables
      const { name } = data;
      const { country } = data.sys;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      // Select the elements to display the weather information and set their inner text or src to the corresponding values
      document.querySelector(".city").innerText = name + ", " + country;
      document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
    },

    // Add a search method to the object that fetches the weather data for the input value
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  // Add an event listener to the search button to call the search method when clicked
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  // Add an event listener to the search bar to call the search method when Enter key is pressed
  document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      weather.search();
    }
  });
  
  // Call the fetchWeather method with a default city name on page load
  weather.fetchWeather("Panauti");