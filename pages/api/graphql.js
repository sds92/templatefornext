import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from 'lib/session';
import { ApolloServer, gql } from 'apollo-server-micro';
import { typeDefs } from 'graphql/schema';
// import { resolvers } from 'graphql/resolvers';
import fs from 'fs';
let products = [];

fs.readFile('data/products2.json', 'utf8', (err, data) => {
  if (err) throw err;
  products = JSON.parse(data);
  console.log('The file has been sent!');
});

const createProduct = (input) => {
  return {
    ...input,
  };
};

const resolvers = {
  Query: {
    products(a, s, d, f) {
      return products;
    },
    product(parent, { id }) {
      return products.find((product) => product.id === id);
    },
  },
  Mutation: {
    createProduct(parent, { input }) {
      const product = createProduct(input);
      products.push(product);
      return product;
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

export default withIronSessionApiRoute(async (req, res) => {
  require('dotenv').config();
  
  console.log("🚀 ~ file: ", req.session)
  if (req.session.user.pass !== process.env.PASS) {
    res.status(500).json({ message: 'AUTH FAILED' });
  }

  // if (req.method === 'POST') {
  //   fs.writeFile(`data/products2.json`, req.body, (err) => {
  //     if (err) throw err;
  //     res.json({ status: 'ok' });
  //     console.log('The file has been saved!');
  //   });
  // }
  // if (req.method === 'GET') {
  //   let products = [];
  //   fs.readFile('data/products2.json', 'utf8', (err, data) => {
  //     if (err) throw err;
  //     products = JSON.parse(data);
  //     res.json(JSON.stringify(products));
  //     console.log('The file has been sent!');
  //   });
  // }

  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', 'https://studio.apollographql.com');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}, sessionOptions);

export const config = {
  api: {
    bodyParser: false,
  },
};
