require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

const usersRoutes = require("./routes/users");
const pathLog = require("./middleware/logs");
const upload = require("./middleware/multer");

app.use(pathLog);

app.use(express.json()); //? agar bisa menggunakan json

app.use("/assets", express.static("public/img"));

app.use("/users", usersRoutes);
app.post("/upload", upload.single("photo"), (req, res) => {
  res.json({
    message: "Upload berhasil",
  });
});

app.use((err, req, res, next) => {
  res.status(400).json({
    status: 400,
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
