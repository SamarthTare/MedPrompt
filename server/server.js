const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes');
const hospitalRoutes = require('./routes/hospitalRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

dotenv.config();

// Create server
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to the database
connectDB();

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/hospitals', hospitalRoutes);
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
