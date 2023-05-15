import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>;

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
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

userSchema.static("getAdminUsers", async function getAdminUsers() {
  const admins = await this.find({role: 'admin'});
  return admins;
})

userSchema.method("fullName", function FullName() {
  return this.name.firstName + " " + this.name.lastName;
});

// create model
const User = model<IUser, UserModel>("User", userSchema);

export default User;
