import express, {
  Application,
} from "express";
import cors from "cors";
import userRoute from "./app/modules/user/user.routes";


const app: Application = express();
// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/v1/user", userRoute)
  
  
  // insert test data to database
  /*
        step-1: interface
        step-2: Schema
        step-3: Model
        step-4: Database query
    */

 

  
  

export default app;
