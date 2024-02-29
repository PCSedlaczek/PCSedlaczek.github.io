// Loop through objects to display cards
let pets = document.getElementById("pets") as HTMLElement;

function createCards() {
  pets.innerHTML = "";

  animals.forEach((val) => {
    pets.innerHTML += val.display()
  })

  // Set vaccination button
  let vaxxBtns = document.getElementsByClassName("vaxx-btn") as HTMLCollection;
  let vaxxIcons = document.getElementsByClassName("vaxx-icon") as HTMLCollection;

  animals.forEach((obj, i) => {
    if (obj.vaxx == true) {
      vaxxBtns[i].classList.remove("btn-danger");
      vaxxBtns[i].classList.add("btn-success");
      vaxxIcons[i].classList.remove("bi-shield-x");
      vaxxIcons[i].classList.add("bi-shield-check");
      vaxxIcons[i].ariaLabel = "Vaccinated"
    } else {
      vaxxBtns[i].classList.remove("btn-success");
      vaxxBtns[i].classList.add("btn-danger");
      vaxxIcons[i].classList.remove("bi-shield-check");
      vaxxIcons[i].classList.add("bi-shield-x");
      vaxxIcons[i].ariaLabel = "Unvaccinated"
    }
  })
}

// Call createCards function
createCards();

// Toggle card image
let imgBtns = document.getElementsByClassName("img-btn") as HTMLCollection;
let imgIcons = document.getElementsByClassName("img-icon") as HTMLCollection;
let imgTop = document.getElementsByClassName("card-img-top") as HTMLCollection;

let visibility = false as boolean;

animals.forEach((obj, i) => {
  imgBtns[i].addEventListener("click", function () {
    let imgBtn = imgBtns[i] as HTMLElement;

    if (visibility == false) {
      imgTop[i].classList.add("d-block");
      imgTop[i].classList.remove("d-none");
      imgIcons[i].classList.remove("bi-card-image");
      imgIcons[i].classList.add("bi-x-lg");
      imgBtn.title = "Hide image";
      visibility = true;
    } else {
      imgTop[i].classList.add("d-none");
      imgTop[i].classList.remove("d-block");
      imgIcons[i].classList.remove("bi-x-lg");
      imgIcons[i].classList.add("bi-card-image");
      imgBtn.title = "Show image";
      visibility = false;
    }
  })
})

// Toggle card info
let infoBtns = document.getElementsByClassName("info-btn") as HTMLCollection;
let infoIcons = document.getElementsByClassName("info-icon") as HTMLCollection;
let cardBody = document.getElementsByClassName("card-body") as HTMLCollection;

visibility = false as boolean;

animals.forEach((obj, i) => {
  infoBtns[i].addEventListener("click", function () {
    let infoBtn = infoBtns[i] as HTMLElement;

    if (visibility == false) {
      cardBody[i].classList.add("d-md-block");
      cardBody[i].classList.remove("d-md-none");
      infoIcons[i].classList.add("bi-x-lg");
      infoIcons[i].classList.remove("bi-caret-down-fill");
      infoBtn.title = "Hide info";
      visibility = true;
    } else {
      cardBody[i].classList.add("d-md-none");
      cardBody[i].classList.remove("d-md-block");
      infoIcons[i].classList.add("bi-caret-down-fill");
      infoIcons[i].classList.remove("bi-x-lg");
      infoBtn.title = "Show info";
      visibility = false;
    }
  })
})

// Sort by age
function ageSort() {

  // Sort ascending
  animals.sort(function (num1, num2) {
    return num1.age - num2.age
  })

  createCards();


}

// Add EventListener to sort button
let sort = document.getElementById("sort") as HTMLElement;

sort.addEventListener("click", ageSort)