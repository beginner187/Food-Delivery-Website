import mongoose from "mongoose";

export const connectDB = async () => {
  // mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/myDatabase
  // mongodb://localhost:27017/
  //<username>:<kumarramesh13079_db_user>
  //<password>:<kbiakoRdIkP99Xl9>
  await mongoose
    .connect(
      "mongodb+srv://kumarramesh13079_db_user:kbiakoRdIkP99Xl9@cluster0.nsoq1dr.mongodb.net/food-del"
    )
    .then(() => console.log("db connected"));
};
