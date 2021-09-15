let card = document.querySelector("card");

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
    console.log(res);
    disData(data);
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
  document.getElementById("person").textContent = data.copyright;
};

//function and addEventListener to activate like button
const button = document.querySelector("#like");

button.addEventListener("click", () => {
  button.classList.toggle("liked");
});

//function to add date params
const dateBtn = document.getElementById("date");
let dateInput = document.getElementById("dateInput");

//retrieves information from input bar
const inputSubmit = (event) => {
  event.preventDefault();

  let selDate = dateInput.value.trim();

  if (selDate) {
    fetchDateImg(date);
  } else fetchData();
};

const fetchDateImg = async (date) => {
  let selDate = dateInput.value.trim();

  try {
    const res = await fetch(`${url}${api_key}&start_date=${selDate}`);
    const data = await res.json();
    console.log(data);
    console.log(res);
    for (let i = 0; i < data.length; i++) {
      let mulData = (data) => {
        let setTitle = document.getElementById("title");
        let newTitle = setTitle.textContent = data[2].title;
        let newDate = document.getElementById("date").textContent = data[i].date;
        let newImg = document.getElementById("picture").src = data[i].hdurl;
        let newDes = document.getElementById("description").textContent =
          data[i].explanation;
        let newPer = document.getElementById("person").textContent = data[i].copyright;

        setTitle.append(newTitle);
      };
      mulData(data);
    }
  } catch (err) {
    console.log(err);
  }
};

fetchData();

dateBtn.addEventListener("click", inputSubmit);
