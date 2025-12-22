const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

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
    .insert([{ course, name, review, rating }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
