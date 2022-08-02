import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

// додаємо розмітку в HTML
gallery.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

// const items = [];

// galleryItems.forEach((element) => {
//   const galleryLink = document.createElement("a");
//   galleryLink.className = "gallery__link";
//   galleryLink.href = element.original;
//   const galleryImage = document.createElement("img");
//   galleryImage.className = "gallery__image";
//   galleryImage.src = element.preview;
//   galleryImage.setAttribute("title", element.description);
//   galleryImage.alt = element.description;

//   galleryLink.append(galleryImage);
//   items.push(galleryLink);
// });
// gallery.append(...items);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
