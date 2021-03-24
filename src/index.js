import API from "./apiService";
import pictureTpl from "../src/picture.hbs";
console.log(pictureTpl)

const inputRef = document.querySelector('.js-input');
const galleryRef = document.querySelector('.gallery');
// console.dir(inputRef)


inputRef.addEventListener('input', findPicture);


function findPicture() {
    const searchPicture = inputRef.value;
    console.log(searchPicture)

    API.fetchPicture(searchPicture)
    .then(renderPictures)
    .catch(error => console.log(error))
}

function renderPictures(pictures) {
    console.log(pictures)
    const markup = pictureTpl(pictures);
    console.log(markup)
    galleryRef.insertAdjacentElement('afterbegin', markup)
}