// routes/feedbackRoutes.js
const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedback');

// POST /api/feedback
router.post('/', async (req, res) => {
  try {
    const feedback = new Feedback({ ...req.body, createdAt: new Date() });
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
