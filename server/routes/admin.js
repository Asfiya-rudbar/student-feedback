const express = require('express');
const router = express.Router();

// Dummy credentials (replace with DB query in real apps)
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "1234"
};

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (
    username === ADMIN_CREDENTIALS.username &&
    password === ADMIN_CREDENTIALS.password
  ) {
    // Return a dummy token
    return res.json({ token: "secure-admin-token" });
  } else {
    return res.status(401).json({ error: "Invalid credentials" });
  }
});

module.exports = router;
