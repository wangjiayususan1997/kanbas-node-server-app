import mongoose from "mongoose";
import schema from "./schema.js";
//"users" is the name of the collection in the database
const model = mongoose.model("users", schema);

export default model;
