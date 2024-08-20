const accessKey = '';
const searchForm = document.querySelector('form');
const searchInput = document.querySelector('.js-search-input');
const searchIcon = document.querySelector('.js-search-icon');
const imagesContainer = document.querySelector('.js-images-container');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = searchInput.value.trim();
  fetchImages(inputValue);
});

const url = `https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY`
function fetchImages(inputValue){
 console.log('helo');
}