import cloudinary from "../config/cloudinary.js";

export const uploadAudio = async (req , res)=>{
    try{
        //audio file ko memory me store krna 
        const fileBuffer = req.file.buffer.toString("based64");

        //cloudinary pe upload krna hai aab isko

        const uploaded = await cloudinary.uploader.upload(`data:audio/mp3;base64, ${fileBuffer}`,
            {
                resource_type: "video",   //audio ho ya video type videeo hi rhega hamesa

            }
        );
        res.status(200).json({
            success:true,
            url: uploaded.secure_url,
        })

    }
    catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            message: "Audio upload failed",
        })
    }
}