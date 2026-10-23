import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes';
const app = express();
const PORT = Number(process.env.PORT) || 3000;
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());
app.get('/api/health', (_req, res) => {
    res.json({ estado: 'ok' });
});
app.use('/api', router);
app.listen(PORT, () => {
    console.log(`API de Ranqhay en http://localhost:${PORT}/api`);
});
