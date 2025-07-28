import { NextResponse } from "next/server";
import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import bcrypt from "bcryptjs";

connectDB();

export async function POST(request) {
    try {
        const {email, password} = await request.json();

        if (!email || !password){
            return NextResponse.json({
                message: "Email and password are required",
                success: false
            },{status: 400});
        }

        const user = await User.findOne({email: email.toLowerCase()});

        if(!user){
            return NextResponse.json({
                message: "User not found. Please register.",
                success: false
            }, {status: 404});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return NextResponse.json({
                message: "Invalid password",
                success: false
            }, {status: 401});
        }

        const userResponse = user.toObject();
        delete userResponse.password;

        return NextResponse.json({
            message: "Login successful",
            success: true,
            user: userResponse
        }, {status: 200});

    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json({
            message: "Login failed",
            success: false,
            error: error.message
        }, {status: 500});
    }
}