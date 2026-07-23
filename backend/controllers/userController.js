const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { createDummyStudentData, createDummyFacultyData } = require("../utils/dummyDataGenerator");

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (err) {
    console.error("Get Users Error:", err);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Create a user
exports.createUser = async (req, res) => {
  try {
    const { name, username, email, password, role } = req.body;

    if (!name || (!username && !email) || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, username/email, and password are required",
      });
    }

    if (!['admin', 'student', 'faculty'].includes(role)) {
      return res.status(400).json({ success: false, message: "Invalid role" });
    }

    const existingUser = await User.findOne({ 
      $or: [
        { email: email || 'never_match_this' }, 
        { username: username || 'never_match_this' }
      ] 
    });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Username or Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
      role: role || "student",
    });

    // Auto-generate realistic dummy data for newly created student or faculty
    if (user.role === "student") {
      await createDummyStudentData(user);
    } else if (user.role === "faculty") {
      await createDummyFacultyData(user);
    }

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Create User Error:", err);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    await user.deleteOne();

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (err) {
    console.error("Delete User Error:", err);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
