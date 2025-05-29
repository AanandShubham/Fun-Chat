import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MongoUser",
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MongoUser",
        required: true
    },
    message: {
        type: String,
        required: true
    }
    // timestamp will create two fields createdAt and updatedAt with current time and date details
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

export default Message ;