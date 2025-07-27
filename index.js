const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Backend is working" });
});

app.post("/check", async (req, res) => {
  const text = req.body.text || "";

  if (!text) {
    return res.status(400).json({ error: "No text provided" });
  }

  try {
   const flaskResponse = await axios.post("http://127.0.0.1:5000/check", { text });

    const prediction = flaskResponse.data.prediction;

    res.json({ result: prediction });

  } catch (error) {
    console.error("Error calling Flask API:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
