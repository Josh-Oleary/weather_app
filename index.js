var cityname = document.querySelector('#cityName');
var temp = document.querySelector('#temperature');
var btn = document.querySelector('#weatherBtn');
var icon = document.querySelector('img');
var cardContainer = document.querySelector('#cardContainer');
var weatherDescription = document.querySelector('#weatherDescription');
var input = document.querySelector('#inputForm');
var errMsg = document.querySelector('#errorMsg');

btn.addEventListener('click', function(e){
    e.preventDefault();
    let city = document.getElementById('city').value;
    axios.get( `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=6a3a0b88d198abf6227eee7b2923106c`)
        .then(function(response){
            cardContainer.className = 'card';
            let iconImg = response.data.weather[0].icon;
            icon.src = `http://openweathermap.org/img/w/${iconImg}.png`
            cityname.innerText = city;
            weatherDescription.innerText = response.data.weather[0].description;
            temp.innerHTML = Math.round(response.data.main.temp) + ' &#x2109';
            input.reset();
            errMsg.innerText = '';
        })
        .catch(function() {
            if(errMsg.innerText === ''){
                errMsg.innerText = "Please enter city name!"
            } else {
                errMsg.innerText = "City name invalid!";
            }
        })
})
