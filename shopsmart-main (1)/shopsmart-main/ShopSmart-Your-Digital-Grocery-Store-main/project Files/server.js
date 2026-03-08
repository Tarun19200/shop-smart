// server.js
const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
require('dotenv').config();

const app = express();

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ─── Route Imports ─────────────────────────────────────────────────────────────
const authRoutes    = require('./routes/auth');
const orderRoutes   = require('./routes/order');
const userRoutes    = require('./routes/user');
const productRoutes = require('./routes/product');

// ─── Mount Routes ──────────────────────────────────────────────────────────────
app.use('/api/auth',    authRoutes);
app.use('/api/orders',  orderRoutes);
app.use('/api/users',   userRoutes);
app.use('/api/products', productRoutes);

// ─── Connect to MongoDB & Start Server ────────────────────────────────────────
// Serve static files
app.use(express.static('public'));

// Default route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/HTML/index.html');
});

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/shopsmart';

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server at http://localhost:${PORT}`));
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    app.listen(PORT, () => console.log(`🚀 Server at http://localhost:${PORT} (without DB)`));
  });