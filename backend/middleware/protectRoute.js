import jwt from 'jsonwebtoken';
import MongoUser from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            res.status(401).json({ error: "Un-authorized user - no token provided" })
        }

        // console.log("token:",token);

        const decoded = jwt.verify(token, process.env.JWT_SECRETE)

        if (!decoded) {
            res.status(401).json({ error: "Un-authorized invalid token" })
        }

        const user = await MongoUser.findById(decoded.userId).select("-password");

        if (!user) {
            res.status(401).json({ error: "Un-authorized user not found" })
        }

        req.user = user;


        // req.body.message = "message is over written"

        // console.log("************************ Protected route START ***************************")
        // console.log("\t\tToken user : ", decoded.userId)
        // // console.log("\t\tUser : ", user._conditions._id);
        // console.log("\t\tUser with Id : ",user._id);
        // // console.log("\t\tMessage : ", req.body.message);
        // console.log("************************ Protected route END ***************************")


        next();

    } catch (error) {
        console.log("Error in protectRoute Middleware : ", error.message)
        res.status(500).json({ error: "Internal Server Error !!" })
    }
}

export default protectRoute;