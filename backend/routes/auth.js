const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

//sign up
router.post("/signup", async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const hashpassword = bcrypt.hashSync(password);
        const user = new User ({ email, username, password: hashpassword });
        await user.save().then(() => res.status(200).json({ user: user }) );
    } catch (error) {
      res.status(400).json({ message: "User already exists" });
    }
})

//sign in
router.post("/signin", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ message: "Please Sign up First" });
        }
        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        // res.status(200).json({ message: "Login Successful", user: user });
        const { password, ...others } = user._doc;
        res.status(200).json({ others });
    } catch (err) {
        res.status(400).json({ message: "User Already exists" });
    }
});



module.exports = router;