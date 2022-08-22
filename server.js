const express = require("express");
const dotenv = require("dotenv").config();
const db_coll = require("./backend/config/db_collection");
const cors = require("cors");

const db = require("./backend/config/database");
const routes = require("./backend/routes/routes");

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.use("/api", routes);

//Test database connection
db.authenticate()
  .then(() => console.log("DATABASE CONNECTED SUCCESSFULLY"))
  .catch((err) => console.log(err));

db.sync({ force: false })
  .then(() => {
    app.listen(port, console.log("App running on http://localhost:" + port));
  })
  .catch((err) => console.log("sync err: ", err));
