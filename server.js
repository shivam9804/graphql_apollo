const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const schema = require("./schema")

const app = express();

app.use(
    '/graphql', 
    graphqlHTTP({
    schema,
    graphiql: true,
    })
);

console.log("Server up and running");
app.listen(4000);