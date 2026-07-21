const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('MongoDB Connected');
};

const User = require('./models/User');

const seedUsers = async () => {
  await connectDB();

  const users = [
    { name: 'Admin User',    email: 'admin@gmail.com',   password: 'admin@123',   role: 'admin' },
    { name: 'Faculty Joel',  email: 'faculty@gmail.com', password: 'faculty@123', role: 'faculty' },
    { name: 'Student Sam',   email: 'student@gmail.com', password: 'student@123', role: 'student' },
    { name: 'Joel Sam',      email: 'joel@gmail.com',    password: '123456',      role: 'admin' },
  ];

  for (const u of users) {
    const existing = await User.findOne({ email: u.email });
    if (existing) {
      console.log(`Already exists: ${u.email}`);
      continue;
    }
    const hashed = await bcrypt.hash(u.password, 10);
    await User.create({ name: u.name, email: u.email, password: hashed, role: u.role });
    console.log(`Created: ${u.email} (${u.role})`);
  }

  console.log('Seed complete!');
  process.exit(0);
};

seedUsers().catch(err => { console.error(err); process.exit(1); });
