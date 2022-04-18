import { MongoClient } from 'mongodb';
// import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI || '';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let clientPromise;

// const clientPromise = async () => {
if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  // @ts-ignore
  if (!global._mongoClientPromise ) {
    //   const client = await mongoose.createConnection('mongodb://localhost:27017/test').asPromise();
    //   conn.readyState;
    // @ts-ignore
    client = new MongoClient(uri, options);
    // @ts-ignore
    global._mongoClientPromise = client.connect();
  }
  // @ts-ignore
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  // @ts-ignore
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}
// };

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
