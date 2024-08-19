import "./searchBar.css";

function searchCards() {
  let input = document.getElementById("searchBar").value;
  input = input.toLowerCase();
  const cards = document.getElementsByClassName("card");

  for (let currentIndex = 0; currentIndex < cards.length; currentIndex++) {
    if (cards[currentIndex].innerHTML.toLowerCase().includes(input)) {
      unfade(cards[currentIndex]);
    } else {
      fade(cards[currentIndex]);
    }
  }
}

/* The principles of these functions are not opposite of each other,
i.e identical except the usage of subtrahends and addends, to enhance visual effects.
*/
function fade(elementToFade) {
  var currentOpacity = 1;
  var opacityThreshold = 0;
  var opacitySubtrahend = 0.1;

  var interval = setInterval(function () {
    if (currentOpacity > opacityThreshold) {
      currentOpacity -= opacitySubtrahend;
      elementToFade.style.opacity = currentOpacity;
    } else {
      clearInterval(interval);
      elementToFade.style.display = "none";
    }
  }, 50);
}

function unfade(elementToUnFade) {
  var currentOpacity = 0.1;
  var opacityThreshold = 1;

  elementToUnFade.style.display = "inline-block";
  var timer = setInterval(function () {
    if (currentOpacity >= opacityThreshold) {
      clearInterval(timer);
    }
    elementToUnFade.style.opacity = currentOpacity;
    elementToUnFade.style.filter =
      "alpha(opacity=" + currentOpacity * 100 + ")";
    currentOpacity += currentOpacity * 0.1;
  }, 1);
}

function SearchBar() {
  return (
    <input
      id="searchBar"
      onKeyUp={searchCards}
      type="text"
      name="search"
      placeholder="Sök efter nyheter..."
    />
  );
}

export default SearchBar;
