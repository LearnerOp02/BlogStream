const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const cookieParser = require('cookie-parser');


const app = express();
app.use(express.json());
app.use(cookieParser());

//connect to mongodb
mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://9j38vedant:XK8Bztk3y4bfR6ab@majorproject.w6or7vb.mongodb.net/?retryWrites=true&w=majority&appName=MajorProject', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("MONGO Connected"))
  .catch((err) => console.log("Connection Error", err));

dotenv.config();
app.use(bodyparser.json({ limit: "2mb" }));
app.use(cors());


//routes
const routes = require('./routes/routes');
app.use("/api", routes);

//image upload
const storage = multer.diskStorage({
  destination: (req, file, fn) => {
    fn(null, "image")
  },
  filename: (req, file, fn) => {
  fn(null, req.body.img)
    // fn(null,"SIGNATURE.jpg")
  }
})
const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("Image has been uploaded successfully!")
})


// port 
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


