const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(express.json());

//connect to mongodb
mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://9j38vedant:PB7aQF8qKDXvrsfY@blogwebsite.jcstrec.mongodb.net/?retryWrites=true&w=majority&appName=BlogWebsite', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("MONGO Connected"))
  .catch((err) => console.log("Connection Error", err));


app.use(bodyparser.json({ limit: "2mb" }));
app.use(cors());

//routes
const routes = require('./routes/route');
app.use("/api", routes)

// port 
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


