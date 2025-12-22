const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");


app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

const { 
    supabase
 } = require("./supabase.js");


app.get("/", (req, res) => {
  res.send("Backend running");
});


app.get("/api/reviews", async (req, res) => {
  const { data, error } = await supabase.from("reviews").select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});


app.post("/api/reviews", async (req, res) => {
  const { course, name, review, rating } = req.body;

  const { data, error } = await supabase
    .from("reviews")
    .insert([{ course, name, review, rating }])
    .select(); 


  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;

