import express from "express";
import browser from "browser-detect";

const app = express();

app.get("/", (req, res) => {
  const result = browser(req.headers["user-agent"]);
  console.log(result);
  if (result.name) {
    res.send(`<h1>${result.name}<h1>`);
  } else {
    res.send(`<h1>Browser not detected<h1>`);
  }
});

app.listen(3000, () => console.log("Listening on port 3000"));
