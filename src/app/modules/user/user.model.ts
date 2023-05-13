import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  dateOfBirth: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  email: {
    type: String,
  },
  contact: {
    type: String,
  },
  emContact: { type: String },
  presentAddress: { type: String, required: true },
  parmanentAdd: { type: String, required: true },
});

// create model
const User = model<IUser>("User", userSchema);

export default User;