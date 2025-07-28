const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ✅ First define the Feedback model
const Feedback = mongoose.model('Feedback', new mongoose.Schema({
  name: String,
  email: String,
  course: String,
  rating: Number,
  comments: String,
  createdAt: { type: Date, default: Date.now }
}));

// ✅ Then define the routes that use it
app.get('/api/feedback', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch feedbacks" });
  }
});

app.post('/api/feedback', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});


app.delete('/api/feedback/:id', async (req, res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    res.json({ message: 'Feedback deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete feedback' });
  }
});

// Admin Routes
const adminRoutes = require("./routes/admin");
app.use("/api/admin", adminRoutes);

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/feedback-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
