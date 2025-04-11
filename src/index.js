import "dotenv/config";
import app from "./app.js";
import http from "http";
import connectDB from "./db/db.connect.js";

const server = http.createServer(app);
const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  connectDB();
});
