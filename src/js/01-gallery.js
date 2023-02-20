import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
const galleryContainer = document.querySelector('.gallery');

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" 
   src="${preview}"
        //  data-source="${original}"
         alt="${description}"
          />
</a>
   `
    )
    .join('');
}

galleryContainer.insertAdjacentHTML(
  'afterbegin',
  createGalleryMarkup(galleryItems)
);
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  // captionDelay: 250,
});
