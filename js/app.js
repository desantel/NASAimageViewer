let card = document.querySelector("card");

//url for api key
const url = "https://api.nasa.gov/planetary/apod?api_key=";

//calls api key from config, keeps key confidential
const api_key = config.API_KEY;

//function to fetch data from url, logs data and displays
const fetchData = async () => {
  let selDate = moment().subtract(3, "days");
  let formDate = selDate.format("YYYY-MM-DD");

  try {
    //empties card area to make way for new cards
    let card = document.querySelector(".card");
    card.innerHTML = "";

    //fetch and create elements
    const res = await fetch(`${url}${api_key}&start_date=${formDate}`);
    const data = await res.json();
    console.log(data);
    console.log(res);
    for (let i = 0; i < data.length; i++) {
      let mulData = (data) => {
        //create new card
        let newCard = document.createElement("div");
        newCard.setAttribute("class", "card");
        card.append(newCard);

        //create new title
        let mulTitle = document.createElement("div");
        mulTitle.textContent = data[i].title;
        mulTitle.setAttribute("class", "card-header");
        newCard.append(mulTitle);

        //create new author
        let mulPer = document.createElement("div");
        mulPer.textContent = data[i].copyright;
        mulPer.setAttribute("class", "content");
        newCard.append(mulPer);

        //create new date
        let mulDate = document.createElement("div");
        mulDate.textContent = data[i].date;
        mulDate.setAttribute("class", "content");
        newCard.append(mulDate);

        //create new pic
        let mulPic = document.createElement("img");
        mulPic.src = data[i].hdurl;
        newCard.append(mulPic);

        //create new description
        let mulDes = document.createElement("div");
        mulDes.textContent = data[i].explanation;
        mulDes.setAttribute("class", "content");
        newCard.append(mulDes);

        //create new footer with like button
        let mulFooter = document.createElement("div");
        mulFooter.setAttribute("class", "card-footer");
        newCard.append(mulFooter);

        let mulBtn = document.createElement("button");
        mulBtn.setAttribute(
          "class",
          "button is-medium is-fullwidth button-like"
        );
        mulBtn.setAttribute("id", "like");
        mulFooter.append(mulBtn);

        let mulHeart = document.createElement("span");
        mulHeart.setAttribute("class", "button-icon button--icon-default");
        mulBtn.append(mulHeart);

        let hDef = document.createElement("span");
        hDef.setAttribute("class", "fa fa-heart");
        mulHeart.append(hDef);

        let btnLiked = document.createElement("span");
        btnLiked.setAttribute("class", "button-icon button--icon-liked");
        mulBtn.append(btnLiked);

        let hLiked = document.createElement("span");
        hLiked.setAttribute("class", "fa fa-heart");
        btnLiked.append(hLiked);

        let conLiked = document.createElement("span");
        conLiked.setAttribute("class", "button-content button-content--liked");
        mulBtn.append(conLiked);

        let conDef = document.createElement("span");
        conDef.setAttribute("class", "button-content button-content--default");
        conDef.textContent = "Like";
        mulBtn.append(conDef);

        //function and addEventListener to activate like button
        const button = document.querySelectorAll("#like");

        button[i].addEventListener("click", () => {
          button[i].classList.toggle("liked");
        });
      };
      mulData(data);
    }
  } catch (err) {
    console.log(err);
  }
};

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

//funtion to fetch images from a start date to present
const fetchDateImg = async (date) => {
  let selDate = dateInput.value.trim();

  try {
    //empties card area to make way for new cards
    let card = document.querySelector(".card");
    card.innerHTML = "";

    //fetch and create elements
    const res = await fetch(`${url}${api_key}&start_date=${selDate}`);
    const data = await res.json();
    console.log(data);
    console.log(res);
    for (let i = 0; i < 49; i++) {
      let mulData = (data) => {
        //create new card
        let newCard = document.createElement("div");
        newCard.setAttribute("class", "card");
        card.append(newCard);

        //create new title
        let mulTitle = document.createElement("div");
        mulTitle.textContent = data[i].title;
        mulTitle.setAttribute("class", "card-header");
        newCard.append(mulTitle);

        //create new author
        let mulPer = document.createElement("div");
        mulPer.textContent = data[i].copyright;
        mulPer.setAttribute("class", "content");
        newCard.append(mulPer);

        //create new date
        let mulDate = document.createElement("div");
        mulDate.textContent = data[i].date;
        mulDate.setAttribute("class", "content");
        newCard.append(mulDate);

        //create new pic
        let mulPic = document.createElement("img");
        mulPic.src = data[i].hdurl;
        newCard.append(mulPic);

        //create new description
        let mulDes = document.createElement("div");
        mulDes.textContent = data[i].explanation;
        mulDes.setAttribute("class", "content");
        newCard.append(mulDes);

        //create new footer with like button
        let mulFooter = document.createElement("div");
        mulFooter.setAttribute("class", "card-footer");
        newCard.append(mulFooter);

        let mulBtn = document.createElement("button");
        mulBtn.setAttribute(
          "class",
          "button is-medium is-fullwidth button-like"
        );
        mulBtn.setAttribute("id", "like");
        mulFooter.append(mulBtn);

        let mulHeart = document.createElement("span");
        mulHeart.setAttribute("class", "button-icon button--icon-default");
        mulBtn.append(mulHeart);

        let hDef = document.createElement("span");
        hDef.setAttribute("class", "fa fa-heart");
        mulHeart.append(hDef);

        let btnLiked = document.createElement("span");
        btnLiked.setAttribute("class", "button-icon button--icon-liked");
        mulBtn.append(btnLiked);

        let hLiked = document.createElement("span");
        hLiked.setAttribute("class", "fa fa-heart");
        btnLiked.append(hLiked);

        let conLiked = document.createElement("span");
        conLiked.setAttribute("class", "button-content button-content--liked");
        mulBtn.append(conLiked);

        let conDef = document.createElement("span");
        conDef.setAttribute("class", "button-content button-content--default");
        conDef.textContent = "Like";
        mulBtn.append(conDef);

        //like button functionality
        const button = document.querySelectorAll("#like");

        button[i].addEventListener("click", () => {
          button[i].classList.toggle("liked");
        });
      };
      mulData(data);
    }
  } catch (err) {
    console.log(err);
  }
};

fetchData();

dateBtn.addEventListener("click", inputSubmit);
