function searchCards() {
  let input = document.getElementById("searchBar").value;
  input = input.toLowerCase();
  let currentCard = document.getElementsByClassName("card");

  for (currentIndex = 0; currentIndex < currentCard.length; currentIndex++) {
    if (!currentCard[currentIndex].innerHTML.toLowerCase().includes(input)) {
      currentCard[currentIndex].style.display = "none";
    } else {
      currentCard[currentIndex].style.display = "list-item";
    }
  }
}