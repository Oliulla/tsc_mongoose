 // 1. Create an interface representing a document in MongoDB.
export interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contact?: string;
    emContact?: string;
    presentAddress: string;
    parmanentAdd: string;
  }