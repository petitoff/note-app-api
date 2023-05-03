const express = require("express");
const app = express();
const notesRoutes = require("./routes");

app.use(express.json());
app.use("/api/", notesRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
