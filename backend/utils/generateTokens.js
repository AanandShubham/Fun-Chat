import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId,res)=>{
    // res.cookie("user","new user");
    const token = jwt.sign({userId},process.env.JWT_SECRETE,{
        expiresIn:'15d'
    })

    res.cookie("jwt",token,{
        maxAge:15 * 24 * 60 * 60 * 1000, // convert 15 days to milliseconds 
        httpOnly:true, // prevents to use from javascript and saves from XSS(cross-site scripting) attacts 
        sameSite: "strict", // prevents from CSRF(cross-site request furgery) attacts 
        secure:process.env.NODE_ENV !== "development" , 
    })
}

export default generateTokenAndSetCookie;