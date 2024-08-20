const express = require("express");

const fs = require("fs");

const cors = require("cors");
const app = express();
const port = 3000;

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { expressjwt: expressJwt } = require("express-jwt");

const USERS_FILE = "./users.json";

app.use(cors());
app.use(express.json());

// Helper function to read users from a file
const readUsersFromFile = () => {
  try {
    const usersData = fs.readFileSync(USERS_FILE, "utf-8");
    return JSON.parse(usersData);
  } catch (error) {
    return [];
  }
};

// Helper function to write users to a file
const writeUsersToFile = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

// Register Route
app.post("/api/register", (request, res) => {
  const { username, password } = request.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Användarnamn och lösenord är obligatoriska" });
  }

  let users = readUsersFromFile();
  const userExists = users.find((user) => user.username === username);

  if (userExists) {
    return res
      .status(400)
      .json({ message: "En användare med detta namn finns redan." });
  }

  const hashedPassword = bcrypt.hashSync(password, 8);
  users.push({ username, password: hashedPassword });
  writeUsersToFile(users);

  res.status(201).json({ message: "Lyckad registrering" });
});

// Login Route
app.post("/api/login", (request, response) => {
  const { username, password } = request.body;
  let users = readUsersFromFile();
  const user = users.find((u) => u.username === username);
  if (!user) {
    return response.status(400).json({ message: "Användaren hittades." });
  }
  const isPasswordValid = bcrypt.comparesponseync(password, user.password);
  if (!isPasswordValid) {
    return response.status(401).json({ message: "Inkorrekta uppgifter." });
  }
  const token = jwt.sign({ username }, "your_jwt_secret", { expire: "1h" });
  response.json({ token });
});

// Protected Route Example
app.get(
  "/api/protected",
  expressJwt({ secret: "your_jwt_secret", algorithms: ["HS256"] }),
  (request, response) => {
    response.json({ message: "Detta är skyddad sökväg", user: request.user });
  }
);

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
];

// API endpoint to get articles
app.get("/api/articles", (request, response) => {
  let filteredArticles = articles;
  const { topic, sortBy } = request.query;

  if (topic) {
    filteredArticles = filteredArticles.filter((article) =>
      article.topic.includes(topic)
    );
  }

  if (sortBy === "newest") {
    filteredArticles = filteredArticles.sort(
      (firstArticle, secondArticle) =>
        new Date(secondArticle.published) - new Date(firstArticle.published)
    );
  } else if (sortBy === "oldest") {
    filteredArticles = filteredArticles.sort(
      (firstArticle, secondArticle) =>
        new Date(firstArticle.published) - new Date(secondArticle.published)
    );
  } else if (sortBy === "author-ascending") {
    filteredArticles = filteredArticles.sort((firstArticle, secondArticle) => {
      const firstAuthor = firstArticle.author.toLowerCase();
      const secondAuthor = secondArticle.author.toLowerCase();

      if (firstAuthor < secondAuthor) return -1;
      if (firstAuthor > secondAuthor) return 1;
      return 0;
    });
  } else if (sortBy === "author-descending") {
    filteredArticles = filteredArticles.sort((firstArticle, secondArticle) => {
      const firstAuthor = firstArticle.author.toLowerCase();
      const secondAuthor = secondArticle.author.toLowerCase();

      if (firstAuthor > secondAuthor) return -1;
      if (firstAuthor < secondAuthor) return 1;
      return 0;
    });
  }

  response.json(filteredArticles);
});

app.listen(port, () => {
  console.log(`Backend API running at http://localhost:${port}`);
});
