import mongoose from "mongoose";

// ! Que : Why we use this pattern
// * Ans :
// ? in serverless functions or env, our code would be executed multiple times but not in a single continues server process, you need manage database connection efficiently, bcz each invocation of serverless func could resolve to the new connection to the database which inefficient and exhaust to  database recourses.

// * MONGODB_URI from .env file is used to connect the database.
const MONGODB_URI = process.env.MONGODB_URI; // || 'mongodb://localhost:27017/test';

// * mongoose referring to cached connection : IF we don't have an cached connection then it simply set it to on empty object
let cached = (global as any).mongoose || { conn: null, promise: null };

// * Creating a function to connectDatabase
export const connectToDatabase = async () => {
  // * If there is an cached connection then we ll return the cached connection
  if (cached.conn) return cached.conn;

  // * If we don't have a  URI for MongoDB Atlas then throw error
  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  // * If we have cached connection,  if not then we create new connection
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
    });

  // * Finally we have cached connection and the waited for the cached.promise
  cached.conn = await cached.promise;

  // * Then return the cached connection
  return cached.conn;
};
