const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
    
    // const cityDetails = data.cityDetails;
    // const weather = data.weather;

    // destructuring properties 
    const {cityDetails, weather} = data;

    // update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    // update date and time image and icons
    let timeSrc = (weather.IsDayTime) ? 'img/day.svg' : 'img/night.svg';
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;

    time.setAttribute('src', timeSrc);
    icon.setAttribute('src', iconSrc);


    // remove d-none if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }

};

const updateCity = async (city) => {
    // console.log(city);
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return {cityDetails, weather};
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update UI with new city value
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
    
    // localStorage
    localStorage.setItem('city', city);
});

if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(err => console.log(err));
}