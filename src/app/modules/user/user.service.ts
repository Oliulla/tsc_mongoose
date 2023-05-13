import User from "./user.model";

export const createUserDB = async () => {
    const user1 = await new User({
      id: 242232424,
      role: "student",
      password: "string",
      name: {
        firstName: "asah",
        lastName: "khan",
      },
      dateOfBirth: "7 octobor",
      gender: "female",
      email: "string@str.com",
      contact: "12a, India",
      emContact: "something em",
      presentAddress: "Ashokathi",
      parmanentAdd: "Ashokathi",
    });
    await user1.save();
    console.log(user1);
  };