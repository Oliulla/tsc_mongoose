import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserDB = async (payload: IUser): Promise<IUser> => {
  const user1 = new User(payload);

  await user1.save(); // built-in instance method
  // console.log(user1);
  user1.fullName() // custom instance method
  return user1;
};

export const getDbUsers = async () => {
  const users = await User.find();
  return users;
};

export const getSingleUser = async (payload: string): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1 });
  return user;
};

export const getAdminUserFromDb = async() => {
  const adminUser = await User.getAdminUsers();
  return adminUser;
}