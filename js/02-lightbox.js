import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
function createGalleryCardsMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
    <li>
    <a class="gallery__item" href="${original}">
    <img 
    class="gallery__image" 
    src="${preview}" 
    alt="${description}" />
  </a>
    </li>
    `;
    }).join('');
};
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
console.log(galleryItems);
galleryContainer.addEventListener('click',handleGalleryClick)
function handleGalleryClick(event){
  event.preventDefault()
  if(event.target.nodeName !== 'IMG'){
      return;
  }
  let href = event.target.closest('a').getAttribute('href');
}
let gallery = new SimpleLightbox(".gallery a", {
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  scrollZoom: false,
 });
gallery.on('show.simplelightbox', function () {
	
});
