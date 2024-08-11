function searchCards() {
  let input = document.getElementById("searchBar").value;
  input = input.toLowerCase();
  let cards = document.getElementsByClassName("card");

  for (currentIndex = 0; currentIndex < cards.length; currentIndex++) {
    if (!cards[currentIndex].innerHTML.toLowerCase().includes(input)) {
      fade(cards[currentIndex]);
    } else {      
      unfade(cards[currentIndex]);
    }
  }
}

function fade(elementToFade) {
  var currentOpacity = 1; 
  var opacityThreshold = 0.1;
  var timer = setInterval(function () {
    if (currentOpacity <= opacityThreshold) {
      clearInterval(timer);
      elementToFade.style.display = "none";
    }
    elementToFade.style.opacity = currentOpacity;
    elementToFade.style.filter = "alpha(opacity=" + currentOpacity * 100 + ")";
    currentOpacity -= currentOpacity * 0.1;
  }, 50);
}

  function unfade(element) {
    var currentOpacity = 0.1;
    var opacityThreshold = 1;
    element.style.display = "block";
    var timer = setInterval(function () {
      if (currentOpacity >= opacityThreshold) {
        clearInterval(timer);
      }
      element.style.opacity = currentOpacity;
      element.style.filter = "alpha(opacity=" + currentOpacity * 100 + ")";
      currentOpacity += currentOpacity * 0.1;
    }, 10);
  }