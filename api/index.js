const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
const commentRoute = require('./routes/comments')
const categoryRoute = require('./routes/categories')
const cors = require('cors')
const path = require('path')

dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log('DB Connection Successful')
 });
 
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)
app.use("/api/categories", categoryRoute)
app.use("/api/comments", commentRoute)

app.listen(process.env.PORT || 3001, ()=>{
    console.log('Backend server is running')
})