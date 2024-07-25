import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchImagesByUserQuery } from './js/pixabay-api.js';
import renderImages from './js/render-functions.js';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const loader = document.querySelector('#loader');
const list = document.querySelector('#gallery');

form.addEventListener('submit', event => {
  event.preventDefault();

  const searchQuery = input.value.trim();
  if (!searchQuery) {
    iziToast.show({
      title: '❌',
      message: 'Please enter a search query.',
      messageColor: 'white',
      backgroundColor: '#E25757',
      position: 'topRight',
    });
    return;
  }

  loader.style.display = 'block';
  list.innerHTML = '';

  searchImagesByUserQuery(searchQuery)
    .then(data => {
      const searchResult = data.hits;
      if (searchResult.length > 0) {
        renderImages(searchResult, list);
      } else {
        iziToast.show({
          title: '❌',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: 'white',
          backgroundColor: '#E25757',
          position: 'topRight',
        });
      }
    })
    .catch(error => {
      console.error('Error fetching images', error);
      iziToast.show({
        title: '❌',
        message: 'Failed to fetch images. Please try again later!',
        messageColor: 'white',
        backgroundColor: '#E25757',
        position: 'topRight',
        timeout: 6000,
      });
    })
    .finally(() => {
      loader.style.display = 'none';
      event.target.reset();
    });
});
