import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;


// database connection
async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practiseMongoose");
    console.log(`db successfully connected!`);

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log("Failed to connected", error);
  }
}

bootstrap();
