import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    district: String,
    nid: Number,
    drivingLicense: String,
    password: String,
});

export const User = mongoose.models.users || mongoose.model("users", userSchema);