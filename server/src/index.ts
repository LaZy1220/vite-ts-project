import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

//Constants
const PORT = process.env.PORT;

//Midleware
app.use(express.json());

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
