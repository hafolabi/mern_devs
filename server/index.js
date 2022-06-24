const express = require('express')
const dotenv = require('dotenv')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

dotenv.config()
const port  = process.env.PORT || 5000
const app = express();

mongoose
  .connect("mongodb://localhost:27017/projectMgmt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});