const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const app = express();
const db = require('./connections/config');
const PORT = process.env.PORT || 3001;
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
    console.log(`Graphql at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

// app.listen(PORT, ()=>{
//     console.log("App is listening on: http://localhost:" + PORT)
// })