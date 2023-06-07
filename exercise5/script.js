const submitBtn = document.querySelector(".submit-btn");
const alertBlock = document.querySelector(".alert");
const imagesBlock = document.querySelector(".imgs");

if (localStorage.getItem("cards")) {
  displayResult(JSON.parse(localStorage.getItem("cards")));
}

submitBtn.onclick = async function () {
  const inputNumber = document.querySelector(".input-number").value;
  const inputLimit = document.querySelector(".input-limit").value;

  if (
    (inputNumber < 0 || inputNumber > 10) &&
    (inputLimit < 0 || inputLimit > 10)
  ) {
    alertBlock.style.display = "block";
    imagesBlock.style.display = "none";
    alertBlock.textContent = "Номер страницы и лимит вне диапазона от 1 до 10";
  } else if (inputLimit < 0 || inputLimit > 10) {
    alertBlock.style.display = "block";
    imagesBlock.style.display = "none";
    alertBlock.textContent = "Лимит вне диапазона от 1 до 10";
  } else if (inputNumber < 0 || inputNumber > 10) {
    alertBlock.style.display = "block";
    imagesBlock.style.display = "none";
    alertBlock.textContent = "Номер страницы вне диапазона от 1 до 10";
  } else {
    const array = await fetch(
      `http://jsonplaceholder.typicode.com/photos?_start=${inputNumber}&_limit=${inputLimit}`
    )
      .then((res) => res.json())
      .catch(() => alert("Ошибка получился)"));

    let result = [];
    array.forEach((item) => result.push(item.url));
    localStorage.setItem("cards", JSON.stringify(result));

    displayResult(result);

    alertBlock.style.display = "none";
    imagesBlock.style.display = "flex";
  }
};
function displayResult(data) {
  let cards = "";
  data.forEach((e) => {
    const cardBlock = `<img class="img" src="${e}">`;
    cards += cardBlock;
  });
  imagesBlock.innerHTML = cards;
}
