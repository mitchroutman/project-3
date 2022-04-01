const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./connections/config");

const PORT = process.env.PORT || 3001;
const app = express();
const authRoutes = require("./routes/auth"); //@require auth file from routes
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: authMiddleware,
});

// const { authMiddleware } = require('./utils/auth');
// const { type } = require('os');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(authRoutes); //@use as middleware

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// })

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API running on port ${PORT}`);
      console.log(`Graphql at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

startApolloServer(typeDefs, resolvers);
