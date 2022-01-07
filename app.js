import express from "express";
import browser from "browser-detect";

const app = express();

app.get("/", (req, res) => {
  const result = browser(req.headers["user-agent"]);
  if (result.name) {
    res.send(result);
  } else {
    res.send(`<h1>mi-super-navegador<h1>`);
  }
});

app.listen(3000, () => console.log("Listening on port 3000"));
