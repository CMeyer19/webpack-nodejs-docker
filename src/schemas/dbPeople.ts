import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name: String,
    imgUrl: String
});

export default mongoose.model('people', personSchema, 'people');