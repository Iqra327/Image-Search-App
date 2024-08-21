const encodedKey = 'ZlZ5Z1BoMmlNOUVMMDZOWkJsUjhRa0Z1dXAzQkJWUzAtQ3VtbGJETk5IRQ==';
const accessKey = atob(encodedKey);

const searchForm = document.querySelector('form');
const searchInput = document.querySelector('.js-search-input');
const searchIcon = document.querySelector('.js-search-icon');
const imagesContainer = document.querySelector('.js-images-container');
const heading = document.querySelector('.js-heading');
const loadMoreBtn = document.querySelector('.js-loadMore');

async function fetchImages(inputValue){
  const url = `https://api.unsplash.com/search/photos?query=${inputValue}&per_page=28&client_id=${accessKey}`;

  try {
    if(inputValue){
      heading.innerHTML = 'Wait for the images to load...';
      imagesContainer.innerHTML = '';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      
      data.results.forEach(photo=> {
        //creat image div
        const imageElement = document.createElement('div');
        imageElement.classList.add('imageDiv');
        imageElement.innerHTML = `<img src="${photo.urls.regular}" alt="img">`;

        //create image overlay
        const imageOverlay = document.createElement('div');
        imageOverlay.classList.add('overlay');

        //create image overlay text
        const overlayText = document.createElement('h3');
        overlayText.innerText = `${photo.alt_description}`;

        loadMoreBtn.style.display = 'block';
        imageElement.addEventListener('dblclick', () => {
          window.open(`${photo.urls.regular}`);
        })

        imagesContainer.appendChild(imageElement);
        imageElement.appendChild(imageOverlay);
        imageOverlay.appendChild(overlayText);
        heading.innerHTML = '';
      });
    }
    else{
      heading.innerHTML = 'Type the name of the image category...';
      imagesContainer.innerHTML = '';
    }
  
  } catch (error) {
    heading.innerHTML = 'Error happened!! Try again later..'   
  }
};

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = searchInput.value.trim();
    fetchImages(inputValue);
});