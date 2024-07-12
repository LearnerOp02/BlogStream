const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const path = require("path");

const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use("/images", express.static(path.join(__dirname, "/image")));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://9j38vedant:XK8Bztk3y4bfR6ab@majorproject.w6or7vb.mongodb.net/?retryWrites=true&w=majority&appName=MajorProject', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("MONGO Connected"))
  .catch((err) => console.log("Connection Error", err));

app.use(bodyparser.json({ limit: "2mb" }));
app.use(cors());

// Routes
const routes = require('./routes/routes');
app.use("/api", routes);

//image upload
const storage = multer.diskStorage({
  destination: (req, file, fn) => {
    fn(null, "image")
    // fn(null,"SIGNATURE.jpg")
  },
  filename: (req, file, fn) => {
    fn(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("Image has been uploaded successfully!");
});


// Port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
