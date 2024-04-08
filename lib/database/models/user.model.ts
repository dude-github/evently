// * Define UserSchema

import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
  // * This is going help us to making a connection between with a clerk user and our Database User
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String, required: true },
});

// * We will use this schema to create a model
// * We use existing model or we are gonna a create new model
const User = models.User || model("User", UserSchema);

// * we export the User model
export default User;
