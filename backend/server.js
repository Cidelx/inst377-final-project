const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

import express from "express";
import { supabase } from "./supabase.js";

app.use(express.json());

// this is the test route
app.get("/", (req, res) => {
  res.send("Backend running");
});

//GET all reviews
app.get("/api/reviews", async (req, res) => {
  const { data, error } = await supabase.from("reviews").select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

//POST new review
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

app.listen(3000, () => console.log("Server running on port 3000"));
