import mongoose from "mongoose";

const connection = {};

(async function dbConnect() {
	 // @ts-ignore
	if (connection.isConnected) {
		return;
	}

	try { // @ts-ignore
		const db = await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
 // @ts-ignore
		connection.isConnected = db.connections[0].readyState;
		
		console.log("MongoDB Connected");
	} catch (error) {
		console.log(error);
	}
})();
