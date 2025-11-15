import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const transcribeAudio = async (audioUrl) => {
  const response = await axios.post(
    "https://api.groq.com/openai/v1/audio/transcriptions",
    {
      file: audioUrl,
      model: "whisper-large-v3-turbo",
      response_format: "text"
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json"
      }
    }
  );
  return response.data; // text output
};
