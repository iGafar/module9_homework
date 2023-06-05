const submitBtn = document.querySelector(".submit-btn");
const resultImg = document.querySelector(".result-img");
const alertBlock = document.querySelector(".alert");

submitBtn.onclick = async function () {
  const width = document.querySelector(".input-width").value;
  const height = document.querySelector(".input-height").value;
  
  if (width >= 100 && width <= 300 && height >= 100 && height <= 300) {
    alertBlock.style.display = "none";

    const imgSrc = await fetch(`https://picsum.photos/${width}/${height}`)
      .then(res => res.url)
      .catch(() => alert("Ошибка получился)"));

    resultImg.src = imgSrc;
    resultImg.style.display = "block";
  } else {
    resultImg.style.display = "none";
    alertBlock.style.display = "flex";
  }
};
