const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from ArgoCD GitOps 🚀");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});


/*app.get("/health", (req, res) => {  // testing healthprobe by making unhealthy
  res.status(500).send("FAIL");
});
*/

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});