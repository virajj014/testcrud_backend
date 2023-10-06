const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8000;

const userRoutes = require('./Routes/userRoutes');



require('dotenv').config();
require('./db')
app.use(bodyParser.json());
const allowedOrigins = ['http://localhost:3000', 'https://testcrud-frontend-29vrjqqb6-virajj014.vercel.app']; // Add more origins as needed
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true, // Allow credentials
    })
);



app.get('/', (req, res) => {
    res.json({ message: 'The API is working' });
});



app.use('/user', userRoutes);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

