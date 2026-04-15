const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/proxy", async (req, res) => {
  const url = req.query.url;
  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (err) {
    res.status(500).send("Error fetching");
  }
});

app.listen(3000, () => console.log("Running on port 3000"));
