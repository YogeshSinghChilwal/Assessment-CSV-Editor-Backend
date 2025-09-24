import express from "express";

const app = express();

const port = 4000;

app.use(express.json());

app.get("/health", (req, res) => {
  res.send("Health is OK!");
});

app.get("/check", (req, res) => {
    res.send("CI/CD working!")
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
