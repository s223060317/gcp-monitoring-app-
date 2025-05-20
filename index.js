const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log("GET / called");
  res.send('Hello from GCP Kubernetes!');
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
