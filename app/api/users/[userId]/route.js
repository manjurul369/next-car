import { NextResponse } from "next/server";
import { User } from "@/models/user";
import bcrypt from 'bcryptjs';


export async function DELETE(request, { params}){
    const { userId } = params;

    try {
        await User.deleteOne({
            _id: userId
        })

        return NextResponse.json({
            message: "User deleted successfully",
            success: true
        }, { status: 200 });
    } catch (error) {
        console.error("Error deleting user:", error);
        return NextResponse.json({
            message: "Failed to delete user",
            success: false,
            error: error.message
        }, { status: 500 });
    }
}


export async function GET(request, { params}){
    const { userId } = params;

    try {
        const user = await User.findById(userId)

        return NextResponse.json(user, { status: 200 });
        
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json({
            message: "Failed to fetch user",
            success: false,
            error: error.message
        }, { status: 500 });
    }
}


export async function PUT(request, { params }) {
    const { userId } = params;

    const {name, phone, address, district, password } = await request.json();
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    try {
        const user = await User.findById(userId)

        user.name = name;
        user.phone = phone;
        user.address = address;
        user.district = district;
        user.password = hashedPassword;

        const updatedUser = await user.save();

        return NextResponse.json({
            message: "User updated successfully",
            success: true,
            user: updatedUser
        }, { status: 200 });

    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json({
            message: "Failed to update user",
            success: false,
            error: error.message
        }, { status: 500 });
    }
}