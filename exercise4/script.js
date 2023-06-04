const submitBtn = document.querySelector('.submit-btn');

const alertBlock = document.querySelector('.alert');

submitBtn.onclick = async function () {
  const width = document.querySelector('.input-width').value;
  const height = document.querySelector('.input-height').value;

  if((width > 100 && width < 300) && (height > 100 && height < 300)) {
    alertBlock.style.display = 'none';
    // fetch(`https://picsum.photos/${width}/${height}`).then(res => res.json()).then(data => console.log(data));
    let result = await fetch(`https://jsonplaceholder.typicode.com/photos/`).then(res => res.json()).then(data => data);
    console.log(result);
  } else {
    alertBlock.style.display = 'flex';
  }
}