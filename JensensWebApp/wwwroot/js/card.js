function generateId(prefix, index) {
  let id = prefix + index;
  return id;
}

function addTags(bodies, index, cardText) {
  let tagChild = document.createElement("small");
  let tagId = generateId("card-tags-" + index);
  tagChild.id = tagId;
  tagChild.className = "card-tags";
  tagChild.textContent = "Nyckelord: ";

  setTags(cardText.textContent, tagChild);
  bodies[index].appendChild(tagChild);
}

function addImage(bodies, index) {
  let imageChild = document.createElement("img");
  let imageId = generateId("card-image-" + index);
  imageChild.id = imageId;
  bodies[index].appendChild(imageChild);
  return imageId;
}

function addButton(imageId, index, bodies) {
  let buttonChild = document.createElement("button");
  let buttonId = generateId("card-button-" + index);
  buttonChild.id = buttonId;
  buttonChild.className = "btn btn-primary";
  buttonChild.textContent = "Lägg till bild";

  bodies[index].appendChild(buttonChild);
  setupImageButton(imageId, buttonId);
}

function addElementsToNormalCards() {
  let bodies = Array.from(document.getElementsByClassName("card-body"));
  let cardTexts = Array.from(document.getElementsByClassName("card-text"));

  console.log(bodies.length + "     ||      " + cardTexts.length);
  cardTexts.forEach((cardText, index) => {
   addTags(bodies, index, cardText);
   let imageId = addImage(bodies, index);
   addButton(imageId, index, bodies);
  });
}
