//url for api key
const url = 'https://api.nasa.gov/planetary/apod?api_key=';

//calls api key from config, keeps key confidential
const api_key = config.API_KEY;


let fetchData = async () => {
    try {
        let res = await fetch(`${url}${api_key}`);
        let data = await res.json();
        console.log(data)
    } catch (err) {
        console.log(err);
    };
};

let disData = data => {
    
}

fetchData();