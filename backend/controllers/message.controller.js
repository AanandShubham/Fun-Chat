import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import MongoUser from "../models/user.model.js";

export const sendMessage = async (req, res) => {
   try {

      const { message } = req.body
      const { id: receiverId } = req.params;
      const senderId = req.user._id;

      let conversation = await Conversation.findOne({
         participents:{$all:[senderId,receiverId]},
      });

      if(!conversation){
         conversation = await Conversation.create({
            participents:[senderId,receiverId]
         })
      }

      const newMessage = new Message({
         senderId,
         receiverId,
         message
      })

      if(newMessage){
         conversation.message.push(newMessage._id);
      }

      // socket io connections codes will be written here 

      // await newMessage.save();
      // await conversation.save();
      
      // this will run this line as parallel 
      await Promise.all([newMessage.save(),conversation.save()]);

      res.status(201).json(newMessage);
      // res.status(201).json({message:"message sent successfully ",receiver:senderId})

      // res.status(200).json({ message: "message Router is ok", "messageFrom": message, sender: senderId, receiverId })

   } catch (error) {
      console.log("Error in Send Message Controller : ", error.message)
      res.status(500).json({ error: "Internal Server Error!" })
   }
}

export const getMessages = async (req,res)=>{

   try {
      const {id:userToChatId} = req.params;
      const senderId = req.user._id;

      const conversation = await Conversation.findOne({
         participents:{$all:[senderId,userToChatId]}
      }).populate("message");

      if(!conversation){
         return res.status(200).json([]);
      }

      // const user = await MongoUser.findOne({username:{$all:'Mohan'}});
      // const user = await MongoUser.findById("682b549c985e44018125019d").select("-password");
      // console.log("User from Message : \n ",user);

      res.status(200).json(conversation.message);

   } catch (error) {
      console.log("Error in Get Message Controller : ", error.message)
      res.status(500).json({ error: "Internal Server Error!" })
   }
}