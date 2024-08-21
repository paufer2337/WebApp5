const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Hard-coded articles data
const articles = [
  {
    title: "Inte klart med ersättare för Ribbenvik",
    summary:
      "▸ Regeringen och SD har ännu inte hittat någon ersättare för Migrationsverkets avgående generaldirektör Mikael Ribbenvik.",
    link: "https://www.aftonbladet.se/nyheter/a/8JWWL2/inte-klart-med-ersattare-for-ribbenvik",
    published: new Date(Date.now()),
    topic: ["SamhalleKonflikter"],
    author: "Johan Johnson",
  },
  {
    title: "Drogs in i inhägnad – dödades av 40 krokodiler",
    summary:
      "▸ En 72-årig man har dödats av omkring 40 krokodiler sedan han dragits in i en inhägnad på familjens reptilfarm.",
    link: "https://www.aftonbladet.se/nyheter/a/bgWW6e/drogs-in-i-inhagnad-dodades-av-40-krokodiler",
    published: new Date(Date.now() - 172800000),
    topic: ["Ekonomi"],
    author: "Fredrik Andersson",
  },
  {
    title: "Nya regler för fastighetsbeskattning införs nästa år",
    summary:
      "▸ Regeringen har beslutat att införa nya regler för fastighetsbeskattning som kommer att träda i kraft nästa år.",
    link: "https://www.aftonbladet.se/nyheter/a/bgWW6e/drogs-in-i-inhagnad-dodades-av-40-krokodiler",
    published: new Date(Date.now() - 86400000),
    topic: ["Ekonomi", "Politik"],
    author: "Anna Svensson",
  },
  {
    title: "Stora framsteg inom AI-forskning",
    summary:
      "▸ Forskare har gjort betydande framsteg inom AI som kan revolutionera industrin.",
    link: "https://www.aftonbladet.se/nyheter/a/bgWW6e/drogs-in-i-inhagnad-dodades-av-40-krokodiler",
    published: new Date(Date.now() - 3600000),
    topic: ["Teknik", "Innovation"],
    author: "Sara Bergström",
  },
  {
    title: "Rekordvärme väntas i sommar",
    summary:
      "▸ Meteorologer varnar för extrem värmebölja som kan slå värmerekord över hela landet.",
    link: "https://www.aftonbladet.se/nyheter/a/bgWW6e/drogs-in-i-inhagnad-dodades-av-40-krokodiler",
    published: new Date(Date.now() - 86400000 * 2),
    topic: ["Väder", "Miljö"],
    author: "Lars Nilsson",
  },
  {
    title: "Stockholmsbörsen stiger efter nya rapporter",
    summary:
      "▸ Stockholmsbörsen stiger efter att flera bolag har presenterat starka kvartalsrapporter.",
    link: "https://www.aftonbladet.se/nyheter/a/bgWW6e/drogs-in-i-inhagnad-dodades-av-40-krokodiler",
    published: new Date(Date.now() - 43200000),
    topic: ["Ekonomi", "Aktiemarknad"],
    author: "Erik Karlsson",
  },
  {
    title: "Ny uppdatering för smartphones släppt",
    summary:
      "▸ En stor uppdatering för smartphones har släppts med nya funktioner och förbättringar.",
    link: "https://www.aftonbladet.se/nyheter/a/bgWW6e/drogs-in-i-inhagnad-dodades-av-40-krokodiler",
    published: new Date(Date.now() - 604800000),
    topic: ["Teknik", "Smartphones"],
    author: "Maria Lindqvist",
  },
  {
    title: "Konflikt om havsresurser eskalerar",
    summary:
      "▸ Konflikten om tillgången till havsresurser mellan länder har eskalerat den senaste veckan.",
    link: "https://www.aftonbladet.se/nyheter/a/bgWW6e/drogs-in-i-inhagnad-dodades-av-40-krokodiler",
    published: new Date(Date.now() - 259200000),
    topic: ["SamhalleKonflikter", "Miljö"],
    author: "Peter Andersson",
  },
  {
    title: "Störningar i kollektivtrafiken efter oväder",
    summary:
      "▸ Kraftiga oväder har orsakat stora störningar i kollektivtrafiken under helgen.",
    link: "https://www.aftonbladet.se/nyheter/a/bgWW6e/drogs-in-i-inhagnad-dodades-av-40-krokodiler",
    published: new Date(Date.now() - 172800000),
    topic: ["Trafik", "Väder"],
    author: "Emma Sjöberg",
  },
  {
    title: "Forskare upptäcker ny exoplanet",
    summary:
      "▸ En ny exoplanet har upptäckts som kan ha förutsättningar för liv.",
    link: "https://www.aftonbladet.se/nyheter/a/bgWW6e/drogs-in-i-inhagnad-dodades-av-40-krokodiler",
    published: new Date(Date.now() - 259200000 * 2),
    topic: ["Vetenskap", "Rymden"],
    author: "Nina Larsson",
  },
  {
    title: "Utvecklingen av elbilar accelererar",
    summary:
      "▸ Utvecklingen av elbilar går snabbare än förväntat, med nya modeller på marknaden.",
    link: "https://www.aftonbladet.se/nyheter/a/bgWW6e/drogs-in-i-inhagnad-dodades-av-40-krokodiler",
    published: new Date(Date.now() - 86400000 * 5),
    topic: ["Teknik", "Transport"],
    author: "Oskar Svensson",
  },
  {
    title: "Politisk kris i sydeuropeiskt land",
    summary:
      "▸ En politisk kris har brutit ut i ett sydeuropeiskt land efter en misslyckad omröstning.",
    link: "https://www.aftonbladet.se/nyheter/a/bgWW6e/drogs-in-i-inhagnad-dodades-av-40-krokodiler",
    published: new Date(Date.now() - 432000000),
    topic: ["Politik", "Internationellt"],
    author: "Eva Johansson",
  },
  {
    title: "Ökat intresse för hållbart mode",
    summary:
      "▸ Allt fler konsumenter efterfrågar hållbart mode, visar ny undersökning.",
    link: "https://www.aftonbladet.se/nyheter/a/bgWW6e/drogs-in-i-inhagnad-dodades-av-40-krokodiler",
    published: new Date(Date.now() - 172800000 * 2),
    topic: ["Livsstil", "Miljö"],
    author: "Karin Eriksson",
  },
];

const sortArticles = (articles, sortBy) => {
  return articles.sort((firstArticle, secondArticle) => {
    switch (sortBy) {
      case "newest":
        return (
          new Date(secondArticle.published) - new Date(firstArticle.published)
        );

      case "oldest":
        return (
          new Date(firstArticle.published) - new Date(secondArticle.published)
        );

      case "author-ascending":
        const firstAuthorAscending = firstArticle.author.toLowerCase();
        const secondAuthorAscending = secondArticle.author.toLowerCase();
        return firstAuthorAscending.localeCompare(secondAuthorAscending);

      case "author-descending":
        const firstAuthorDescending = firstArticle.author.toLowerCase();
        const secondAuthorDescending = secondArticle.author.toLowerCase();
        return secondAuthorDescending.localeCompare(firstAuthorDescending);

      default:
        return articles;
    }
  });
};

// API endpoint to get articles
app.get("/api/articles", (request, response) => {
  let filteredArticles = articles;
  const { topic, sortBy } = request.query;

  if (topic) {
    filteredArticles = filteredArticles.filter((article) =>
      article.topic.includes(topic)
    );
  }

  filteredArticles = sortArticles(filteredArticles, sortBy);
  response.json(filteredArticles);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Backend API running at http://localhost:${port}`);
});