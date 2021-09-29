import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true},
    fullname: { type: String},
    address: [{details: {type: String}, for: {type: String}}],
    phoneNumber: [{ type: Number}], 
});

export const UserModel = mongoose.model("Users", UserSchema);