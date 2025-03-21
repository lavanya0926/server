const express = require('express');
const connectDB = require('./config/db'); 
const cors = require('cors');
require('dotenv').config();

const app = express();


connectDB();


app.use(express.json({ extended: false }));
// app.use(cors());
app.use(cors({
  origin: ['tour-wheat-pi.vercel.app'],  
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


app.use('/api/auth', require('./routes/auth'));
app.use('/api/authLogin', require('./routes/authLogin')); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
