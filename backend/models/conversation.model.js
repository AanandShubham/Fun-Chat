import mongoose from "mongoose";

const conversationScheman = new mongoose.Schema({
    participents: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "MongoUser"
        }
    ],
    message: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default:[],
        }
    ]

    // timestamp will create two fields createdAt and updatedAt with current time and date details
}, { timestamps: true });

const Conversation = mongoose.model("Conversation", conversationScheman);

export default Conversation;