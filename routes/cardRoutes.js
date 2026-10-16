
const express = require("express");
const router = express.Router();
const AtmCard = require("../models/AtmCard");

// GET all ATM card records
router.get("/", async (req, res) => {
  try {
    const cards = await AtmCard.find().sort({ createdAt: -1 });
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET one ATM card record
router.get("/:id", async (req, res) => {
  try {
    const card = await AtmCard.findById(req.params.id);

    if (!card) {
      return res.status(404).json({ message: "Card record not found" });
    }

    res.json(card);
  } catch (error) {
    res.status(400).json({ message: "Invalid card record ID" });
  }
});

// ADD a found ATM card
router.post("/", async (req, res) => {
  try {
    const card = await AtmCard.create(req.body);
    res.status(201).json(card);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// UPDATE an ATM card record
router.put("/:id", async (req, res) => {
  try {
    const card = await AtmCard.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!card) {
      return res.status(404).json({ message: "Card record not found" });
    }

    res.json(card);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
