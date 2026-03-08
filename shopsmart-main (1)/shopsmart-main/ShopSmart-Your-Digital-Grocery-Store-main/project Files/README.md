# ShopSmart - Digital Grocery Store

## Installation

1. Install Node.js from https://nodejs.org/
2. Run: `npm install`
3. Start: `npm start`

## Required Dependencies
- express
- mongoose
- bcryptjs
- jsonwebtoken
- cors
- dotenv

## Environment Variables
Create `.env` file with:
```
MONGODB_URI=mongodb://localhost:27017/shopsmart
JWT_SECRET=your_jwt_secret_key_here
PORT=3000
```