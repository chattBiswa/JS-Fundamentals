const key = "R8GibvuwslTenOuY9teQ36WjmBKksk8T";

const getCity = async (city) => {
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    if(response.status !== 200){
        throw new Error("Error in getCity!");
    }
    const data = await response.json();

    return data[0];

};

const getWeather = async (cityCode) => {
    const base = `http://dataservice.accuweather.com/currentconditions/v1/${cityCode}`;
    const query = `?apikey=${key}`;

    const response = await fetch(base + query);
    if(response.status !== 200){
        throw new Error("Error in getWeather!");
    }
    const data = await response.json();
    // console.log(data);
    return data[0];
};

// for testing

// getCity("bengaluru")
//     .then(data => {return getWeather(data.Key)})
//     .then(data => console.log(data))
//     .catch(err => console.log(err));