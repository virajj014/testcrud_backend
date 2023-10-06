const express = require('express');
const router = express.Router();
const User = require('../Models/UserSchema')
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
    const { name, email, age, password } = req.body;

    try {
        const user = await User.create({
            name,
            email,
            age,
            password
        });
        res.status(201).json({ user: user._id, ok : true , message : "User created successfully" });
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', ok : false });
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ users, ok : true , message : "Users fetched successfully"});
    } catch (error) {
        res.status(400).json({ message: 'Error fetching users', ok : false });
    }
});



module.exports = router;
