const bcrypt = require('bcrypt');
const User = require('../model/User');
const jwt = require('jsonwebtoken'); 


// Register
exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({ username, email, password: hashedPassword });
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json(error);
    }
}

// Login
exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json("User not found!");
        }
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) {
            return res.status(401).json("Wrong credentials!");
        }
        const token = jwt.sign(
            { _id: user._id, username: user.username, email: user.email },
            process.env.SECRET,
            { expiresIn: "3d" }
        );
        const { password, ...info } = user._doc;
        res.cookie("token", token, { httpOnly: true }).status(200).json(info);
    } catch (error) {
        res.status(500).json(error);
    }
}

//Logout
exports.logout = async (_req, res) => {
    try {
        res.clearCookie("token", { sameSite: "none", secure: true }).status(200).send("User logged out successfully!");
    } catch (error) {
        res.status(500).json(error);
    }
}


//REFETCH USER
exports.refetch = async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    jwt.verify(token, process.env.SECRET, {}, async (err, data) => {
        if (err) {
            return res.status(404).json(err);
        }
        res.status(200).json(data);
    });
};


