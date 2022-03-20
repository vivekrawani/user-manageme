import express from 'express';
import bodyParser from "body-parser";
import usersRoute from "./routes/users.js";
import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1/userDB');// localhost not working in my system


var db = mongoose.connection;

db.once('open', function() {
  console.log("Connection to database Successful!");
});

db.on('error', console.error.bind(console, 'connection error:'));

const app = express();

const PORT =  process.env.PORT || 5000;

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`working on port http://localhost:${PORT}`);
});
app.use("/users", usersRoute);


app.get('/', (req, res) => {
  res.send("homepage");
});
