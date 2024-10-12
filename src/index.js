const express = require("express");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();


const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.render("index", { title: "Riskless" });
});

dataRouter = require("./routes/data.router.js")
app.use("/data", dataRouter)

const port = process.env.PORT || 3001;
app.listen(port, () => {
  if (process.env.NODE_ENV)
    console.log(`${process.env.NODE_ENV} mode`);
  console.log(`server running on ${port}`);
});

