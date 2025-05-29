import MongoUser from "../models/user.model.js";

export const getAllUsers = async (req,res)=>{

    try {
        const logedInUserId = req.user._id;

        const filteredUsers = await MongoUser.find({_id:{$ne:logedInUserId}}).select("-password")
        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("Error in Get All users Controller Route : ",error.message)
        res.status(501).json("Internal Server Error !!")
    }
}