const submitBtn = document.querySelector("button");
const errorLabel = document.querySelector("p");
const imagesBlock = document.querySelector(".imgs");

submitBtn.onclick = function () {
  const value = document.querySelector("input").value;

  if (value > 10 || value < 1) {
    errorLabel.style.display = "block";
    errorLabel.textContent = 'Число вне диапазона от 1 до 10';
    imagesBlock.style.display = "none";
  } else {
    errorLabel.style.display = "none";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://dog.ceo/api/breeds/image/random/${value}`);
    xhr.send();
    xhr.onload = () => {
      const imagesPath = JSON.parse(xhr.response).message;
      
      let cards = '';
      imagesPath.forEach(imagePath => {
        if (xhr.status !== 200) return;
        const cardBlock = `<img class="img" src="${imagePath}">`
        
        cards += cardBlock;
      });

      imagesBlock.style.display = "flex";
      imagesBlock.innerHTML = cards;
    };

    xhr.onerror = () => {
      errorLabel.textContent = 'Произошла шляпа';
      errorLabel.style.display = "block";
    };
  }
};
