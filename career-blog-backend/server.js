const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

const articles = [
  {
    id: 1,
    title: "Career Development Tips",
    content:
      "Practice these five resources...",
  },
  {id: 2, title: "Job Market Trends", content: "Okay so here are 3.."},
  {id: 3, title: "Interview Preparation", content: "Do not go to interview without learning these..."},
];

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.post("/contact", (req, res) => {
  console.log("Received:", req.body);
  res.json({message: "Form received"});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
