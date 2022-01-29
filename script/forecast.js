const key = '682500PcukwQUtq1UDd6XimUfAmBA5HL';

const getWeather = async (id) => {
    const base = `http://dataservice.accuweather.com/currentconditions/v1/${id}`;
    const query = `?apikey=${key}`;

    const response = await fetch(base + query, {mode: 'cors'});
    const data = await response.json();

    return data[0];
}

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query,{mode: 'cors'});
    const data = await response.json();

    return data[0];
}

// getCity('coimbatore')
//     .then(data => {
//         console.log(data)
//         return getWeather(data.Key)
//     })
//     .catch(error => console.log(error))
