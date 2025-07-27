import { NextResponse } from 'next/server';
import { connectDB } from '@/helper/db';
import { User } from '@/models/user';
import bcrypt from 'bcryptjs';

connectDB();

export async function GET(request) {
  console.log("GET request received for users");
  return NextResponse.json({
    message: "GET request successful",
    success: true,
  })
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Check if user already exists
    const existingUser = await User.findOne({ 
      $or: [
        { email: data.email },
        { phone: data.phone },
        { nid: data.nid }
      ]
    });
    
    if (existingUser) {
      return NextResponse.json(
        { 
          message: "User already exists with this email, phone, or NID",
          success: false 
        },
        { status: 400 }
      );
    }
    
    // Hash the password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);
    
    // Create new user
    const newUser = new User({
      name: data.name,
      phone: data.phone,
      email: data.email,
      address: data.address,
      district: data.district,
      nid: Number(data.nid),
      drivingLicense: data.drivingLicense || "",
      password: hashedPassword,
    });
    
    const savedUser = await newUser.save();
    
    // Remove password from response
    const userResponse = savedUser.toObject();
    delete userResponse.password;
    
    return NextResponse.json({
      message: "User created successfully",
      success: true,
      user: userResponse
    }, { status: 201 });
    
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { 
        message: "Failed to create user",
        success: false,
        error: error.message 
      },
      { status: 500 }
    );
  }
}