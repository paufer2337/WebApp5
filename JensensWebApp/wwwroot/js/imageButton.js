function setupImageButton(cardImageId, imageButtonId) {
  const cardImage = document.getElementById(cardImageId);
  const addImageButton = document.getElementById(imageButtonId);
  console.log("Image ID: " + cardImage.id);
  console.log("Button ID: " + addImageButton.id);

  addImageButton.addEventListener("click", (event) => {
    // Used to ensure the image does not disappear.
    event.preventDefault();

    let urlDialog = prompt("Ange URL till önskad bild");

    console.log("User input URL:", urlDialog);

    if (urlDialog) {
      console.log("Image source set to:", urlDialog);
      cardImage.src = urlDialog;
      cardImage.style.display = "block";

      addImageButton.textContent = "Byt bild";
    } else {
      console.log("No URL provided by the user.");
      cardImage.style.display = "none";
    }
  });
}
