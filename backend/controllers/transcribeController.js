import { transcribeAudio } from "../utils/whisper.js";

export const transcribeAudioController = async (req, res) => {
  try {
    const { audioUrl } = req.body;
    if (!audioUrl) return res.status(400).json({ error: "Audio URL is required" });

    const transcript = await transcribeAudio(audioUrl);
    res.status(200).json({ success: true, transcript });
  } catch (err) {
    res.status(500).json({ error: "Transcription failed" });
  }
};
