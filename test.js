const mongoose = require('mongoose');
const mongodb = require('mongodb');
async function start() {
//   const client = await mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/corporateSites', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   console.log('🚀 ~ file: test.js ~ line 7 ~ conn', client instanceof mongodb.MongoClient);
//   const conn = mongoose.createConnection().setClient(client);

  const conn = await mongoose.createConnection('mongodb://127.0.0.1:27017/corporateSites', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
//   conn.getClient();
  console.log('🚀 ~ file: test.js ~ line 7 ~ conn', conn);
  conn.on('connected', () => console.log('🚀 ~ file: test.js ~ line 7 ~ conn',conn));
}
start();
// const conn  = mongoose
//   .createConnection('mongodb://127.0.0.1:27017/corporateSites', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   conn.on('disconnected', console.log("🚀 ~ file: test.js ~ line 7 ~ conn", conn));

//   conn.on('connection', (stream) => {
//     console.log('someone connected!');
//   })
// console.log("🚀 ~ file: test.js ~ line 7 ~ conn", conn)
//   .then((connection) => {
//     console.log('🚀 ~ file: dbMongo.ts ~ line 50 ~ .then ~ connection', connection);

//     return connection.getClient;
//   })
//   .catch((err) => console.log(`\\\\\\\\\\\n ${err} \\\\\\\\\\\\\\\\n`));
