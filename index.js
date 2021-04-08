const {graphqlHTTP} = require('express-graphql');
const express = require('express');
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolvers');
const store = require('./storage/data_store');
const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver
  })
)




// debugging endpoint
app.get('/', function (req, res) {
  store.add({'hi':'hi'})
  res.send(store.getAllData())
})

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
