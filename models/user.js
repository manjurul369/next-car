import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    name: String,
    phone: String,
    email: { type: String, unique: true },
    address: String,
    district: String,
    nid: Number,
    drivingLicense: String,
    password: String,
    googleId: String, // For Google OAuth users
}, {
    timestamps: true
});

export const User = mongoose.models.users || mongoose.model("users", userSchema);