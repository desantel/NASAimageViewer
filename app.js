//url for api key
const url = 'https://api.nasa.gov/planetary/apod?api_key=';

//calls api key from config, keeps key confidential
const api_key = config.API_KEY;


const fetchData = async () => {
    try {
        const res = await fetch(`${url}${api_key}`);
        const data = await res.json();
        console.log(data)
    } catch (err) {
        console.log(err);
    };
};

let disData = data => {
    document.getElementById('title').textContent = data.title;
    document.getElementById('date').textContent = data.date;
    document.getElementById('picture').textContent = data.hdurl;
    document.getElementById('description').textContent = data.explanation;
}


// let datePicker = () => {
//     $(input[name = "daterange"]).daterangepicker({
//         opens: 'left'
//       }, function(start, end, label) {
//         console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
//       });
// }

fetchData();