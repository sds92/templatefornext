import mongoose from 'mongoose';
import userSchema from '../db/schema/Users';
import type { NextApiRequest, NextApiResponse } from 'next';
// import { MongoClient } from "mongodb";

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentiatlly
 * during API Route usage.
 * https://github.com/vercel/next.js/pull/17666
 */
// global.mongo = global.mongo || {};

// export async function getMongoClient() {
//   if (!global.mongo.client) {
//     console.log("🚀 ~ file: dbMongo.ts ~ line 14 ~ getMongoClient ~ global.mongo.client", global.mongo.client)
//     global.mongo.client = new MongoClient(process.env.MONGODB_URI);
//   }
//   // It is okay to call connect() even if it is connected
//   // using node-mongodb-native v4 (it will be no-op)
//   // See: https://github.com/mongodb/node-mongodb-native/blob/4.0/docs/CHANGES_4.0.0.md
//   await global.mongo.client.connect();
//   console.log("🚀 ~ file: dbMongo.ts ~ line 20 ~ getMongoClient ~ global.mongo.client", global.mongo.client)
//   return global.mongo.client;
// }

// export default async function database(req, res, next) {
// if (!global.mongo.client) {
//   global.mongo.client = new MongoClient(process.env.MONGODB_URI);
// }
//   console.log("🚀 ~ file: dbMongo.ts ~ line 27 ~ database ~ global.mongo.client", global.mongo.client)
//   req.dbClient = await getMongoClient();
//   console.log("🚀 ~ file: dbMongo.ts ~ line 27 ~ database ~ req.dbClient", req.dbClient)
//   req.db = req.dbClient.db('staticSites'); // this use the database specified in the MONGODB_URI (after the "/")
//   console.log("🚀 ~ file: dbMongo.ts ~ line 29 ~ database ~ req.db", req.db)
//   if (!indexesCreated) await createIndexes(req.db);
//   return next();
// }

global.mongo = global.mongo || {};
export default async function database(req: NextApiRequest, res: NextApiResponse, next: any) {
  if (!global.mongo.db) {
    const conn = await mongoose.createConnection(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    conn.on('connected', async () => {
      global.mongo.db = conn;
      req.db = await global.mongo.db;
      console.log("🚀 ~ file: dbMongo.ts connected")
      return next();
    });
  }
  // try {
  //   global.mongo.db.model('Users', userSchema);
  // } catch (error) {
  //   console.log('🚀 ~ file: dbMongo.ts ~ line 55 ~ database ~ error', error);
  // }
  req.db = await global.mongo.db;
  return next();
}
