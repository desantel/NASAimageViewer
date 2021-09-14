let card = document.querySelector('card');

//url for api key
const url = "https://api.nasa.gov/planetary/apod?api_key=";

//calls api key from config, keeps key confidential
const api_key = config.API_KEY;

//function to fetch data from url, logs data and displays
const fetchData = async () => {
  try {
    const res = await fetch(`${url}${api_key}`);
    const data = await res.json();
    console.log(data);
    console.log(data.date)
    disData(data)
  } catch (err) {
    console.log(err);
  }
};

//function to display to proper areas on page (date not working???)
let disData = (data) => {
  document.getElementById("title").textContent = data.title;
  document.getElementById("date").textContent = data.date;
  document.getElementById("picture").src = data.hdurl;
  document.getElementById("description").textContent = data.explanation;
  document.getElementById('person').textContent = data.copyright;
};

//function to activate like button, 
const likeBut = () => {

}

// let datePicker = () => {
//     $(input[name = "daterange"]).daterangepicker({
//         opens: 'left'
//       }, function(start, end, label) {
//         console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
//       });
// }

fetchData();
