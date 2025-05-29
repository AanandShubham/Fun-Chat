import bcrypt from "bcryptjs";
import MongoUser from "../models/user.model.js"
import generateTokenAndSetCookie from "../utils/generateTokens.js";

export const signup = async (req, res) => {
    try {

        const { fullname, username, password, confirmPassword, gender } = req.body

        if (password !== confirmPassword) {
            res.status(400).json({ error: "Password and confirmPassword dose't match" });
        }

        const user = await MongoUser.findOne({ username })

        if (user) {
            res.status(500).json("User Already Exists")
        }

        // Hashign the password to have data privacy even after our database is hacked 

        const salt = await bcrypt.genSalt(10);

        // console.log("salt is Here : ",salt);

        const hashedPassword = await bcrypt.hash(password, salt);

        // api for random user Avatar

        // https://avatar-placeholder.iran.liara.run/

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

        const newUser = await MongoUser.create({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
        })

        if (newUser) {
            // generating jwt tokens
            generateTokenAndSetCookie(newUser._id, res)

            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                username: newUser.username,
                fullname: newUser.fullname,
                profilePic: newUser.profilePic
            })
        } else {
            res.status(400).json({ error: "invalid User Data ! .........." })
        }


    } catch (error) {
        console.log("Error in Signup Route : ", error)
        res.status(500).json({ status: "Server Error in auth Controller File " })

    }
}
export const login = async (req, res) => {
    // res.send("LOgin Controller");
    // res.json({message:"login Route",data:req.body})

    try {
        const { username, password } = req.body;
        const user = await MongoUser.findOne({ username })

        const isPasswordTrue = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordTrue) {
            res.status(500).json({ error: "users details are Invalid !!!" })
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilePic: user.profilePic
        })

    } catch (error) {
        console.log("Error in Login Route : ", error)
        res.status(500).json({ status: "Server Error in auth Controller File " })
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", {
            maxAge: 0
        })

        res.status(200).json({ message: "Logged out successfully" })

    } catch (error) {
        console.log("Error in Logout Route : ", error)
        res.status(500).json({ status: "Server Error in auth Controller File " })
    }
    // res.send("Logout Controller");
}