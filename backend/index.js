const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
