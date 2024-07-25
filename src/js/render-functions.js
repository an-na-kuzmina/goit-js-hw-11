import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const renderImages = (searchResult, list) => {
  list.innerHTML = '';
  const markup = searchResult
    .map(
      element => `
    <li class="card">
      <a class="card-link" href="${element.largeImageURL}">
        <img class="card-image" src="${element.webformatURL}" alt="${element.tags}" />
      </a>
      <div class="info-text">
        <ul class="card-list">
          <li class="card-list-li">
            <h3>likes</h3>
            <p>${element.likes}</p>
          </li>
          <li class="card-list-li">
            <h3>views</h3>
            <p>${element.views}</p>
          </li>
          <li class="card-list-li">
            <h3>comments</h3>
            <p>${element.comments}</p>
          </li>
          <li class="card-list-li">
            <h3>downloads</h3>
            <p>${element.downloads}</p>
          </li>
        </ul>
      </div>
    </li>
  `
    )
    .join('');
  list.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox('.card-link', {
    inlineStyles: false,
    captionsData: 'alt',
    captionDelay: 250,
    disableScroll: true,
  });

  lightbox.refresh();
};
export default renderImages;
