import express from 'express';
    import { transcribeAudioController } from '../controllers/transcribeController.js';

    const router = express.Router();

    router.post("/", transcribeAudioController);


    export default router;
    