const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8080;

app.use(cors());
const delay = 800;

app.get('/api/card', (req, res) => {
  const _data = {
    data: {
      message: 'Like this video!',
      people: ['Alan', 'Jack', 'Barry'],
    },
  };
  setTimeout(() => {
    res.send(_data);
  }, delay);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
