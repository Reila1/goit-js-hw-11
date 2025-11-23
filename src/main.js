import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
iziToast.settings({
      timeout: 3000,
      resetOnHover: true,
      position: 'topRight',
    });

    const searchForm = document.querySelector('.form');
    const searchInputName = 'search-text';

    searchForm.addEventListener('submit', event => {
      event.preventDefault();
      
      const query = event.target.elements[searchInputName].value.trim();

      if (query === '') {
        iziToast.error({
          title: 'Error',
          message: 'Please enter a search term!',
        });
        return;
      }

      clearGallery();
      showLoader();

      getImagesByQuery(query)
        .then(data => {
          hideLoader();

          if (!data.hits || data.hits.length === 0) {
            iziToast.error({
              title: 'Error',
              message: 'Sorry, there are no images matching your search query. Please try again!',
            });
          } else {
            console.log(`Hooray! Found ${data.hits.length} images.`, data.hits);
            
            createGallery(data.hits);
            
            iziToast.success({
              title: 'Success',
              message: `Found ${data.totalHits} images!`,
            });
          }

          event.target.reset();
        })
        .catch(error => {
          hideLoader();
          console.error(error.message);
          iziToast.error({
            title: 'Request Failed',
            message: `An error occurred: ${error.message}`,
          });
        });
    });