const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const CONNECTION_STRING =
  "mongodb+srv://admin:eYlCryOJhHy2hYAW@cluster0-mauqm.mongodb.net/test?retryWrites=true&w=majority";
const app = express();

mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once("open", () => {
  console.log("connected to db");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Hello on 4000");
});
