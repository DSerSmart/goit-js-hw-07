import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

// додаємо розмітку в HTML
gallery.insertAdjacentHTML("beforeend", galleryMarkup);
// ТЕ САМЕ НИЖЧЕ з 31 рядка до 51

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
// ТЕ САМЕ НИЖЧЕ

// const items = [];

// galleryItems.forEach((element) => {
//   const galleryItem = document.createElement("div");
//   galleryItem.className = "gallery__item";
//   const galleryLink = document.createElement("a");
//   galleryLink.className = "gallery__link";
//   galleryLink.href = element.original;
//   console.log(galleryLink.href);
//   const galleryImage = document.createElement("img");
//   galleryImage.className = "gallery__image";
//   galleryImage.src = element.preview;
//   galleryImage.setAttribute("data-source", element.original);
//   galleryImage.alt = element.description;

//   galleryItem.append(galleryLink);
//   galleryLink.append(galleryImage);
//   items.push(galleryItem);
// });

// gallery.append(...items);

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const selectedImage = e.target.getAttribute("data-source");

  const instance = basicLightbox.create(
    `
    <img src="${selectedImage}" width="800" height="600">
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onClickEsc);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onClickEsc);
      },
    }
  );

  instance.show();

  function onClickEsc(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }

  // gallery.addEventListener("keydown", (e) => {
  //   if (e.key === "Escape") {
  //     instance.close();
  //   }
  // });
});
// ===============================
