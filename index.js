var input = document.querySelector('#input_form');
var weatherCard = document.querySelector('#weather_card');
var apiKey = '6a3a0b88d198abf6227eee7b2923106c';


input.addEventListener('submit', function(e){
    e.preventDefault();
    let location = document.getElementById('location').value;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`)
    .then(function(response){
        let imgCode = response.data.weather[0].icon;
        let newCard = document.createElement('div')
        let cardHeading = document.createElement('h3');
        let cardImg = document.createElement('img');
        cardImg.src = `http://openweathermap.org/img/w/${imgCode}.png`;
        let cardTemp = document.createElement('h4');
        let cardDescription = document.createElement('p');
        
        
        


        cardHeading.innerText = response.data.name;
        cardTemp.innerText = Math.floor(response.data.main.temp)
        cardDescription.innerText = response.data.weather[0].description

        newCard.className = 'card_container'
        newCard.appendChild(cardHeading)
        newCard.appendChild(cardImg);
        newCard.appendChild(cardTemp)
        newCard.appendChild(cardDescription);
    
        weatherCard.appendChild(newCard);
        
        document.getElementById('location').value = '';
    })
})

