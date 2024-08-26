export function getTags(summary) {
  let tagsToCheckFor = [
    "SD",
    "Regering",
    "Migrationsverket",
    "Man",
    "Stöd",
    "Sandviken",
    "Välfärd",
    "Död",
    "Stockholm",
    "Börsen",
    "Framsteg",
    "AI",
    "Forskning",
    "Fastighet",
    "Skatt",
    "Värme",
    "Rekord",
    "Kollektivtrafik",
    "Resurser",
    "Mode",
    "Utveckling",
    "Exoplanet",
    "Smartphones",
    "Politisk",
    "Sydeuropeiskt land",
  ];

  var foundTags = [];
  var tagText = "";
  tagsToCheckFor.forEach((currentTag, index) => {
    /* The usage of a temporary variable enables to check for alternative spellings
     , e.g., for sD, while displaying it as "SD".*/
    summary = summary.toLowerCase();
    let temporaryElement = currentTag;
    if (summary.includes(temporaryElement.toLowerCase())) {
      foundTags[index] = currentTag;
    }
  });

  foundTags.forEach((currentTag, index) => {
    tagText += currentTag;
    if (index < foundTags.length - 1) {
      tagText += ", ";
    }
    tagText += " ";  
  });    
  
  return tagText;
}