import dotenv from 'dotenv';
dotenv.config();

console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'Loaded (masked)' : 'NOT LOADED');
console.log('PORT:', process.env.PORT);
console.log('JWT_SECRET:', process.env.JWT_SECRET ? 'Loaded (masked)' : 'NOT LOADED');
