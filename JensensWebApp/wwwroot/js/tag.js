function setTags(summary, tagElement) {
  let tagsToCheckFor = [
    "SD",
    "Regering",
    "Migrationsverket",
    "Man",
    "Stöd",
    "Sandviken",
    "Välfärd",
    "Död",
  ];

  var foundTags = [];
  tagsToCheckFor.forEach((currentTag, index) => {
    /* The usage of a temporary variable enables to check for alternative spellings
     , e.g., for sD, while displaying it as "SD".*/
    summary = summary.toLowerCase();
    let temporaryElement = currentTag;
    if (summary.includes(temporaryElement.toLowerCase())) {
      console.log("Summary: " + summary + " || Tag: " + currentTag);

      foundTags[index] = currentTag;
    }
  });

  foundTags.forEach((currentTag, index) => {
    tagElement.textContent += currentTag;
    if (index < foundTags.length - 1) {
      tagElement.textContent += ", ";

    }
  });
}
