// pages/api/proxy.js
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
    try {
        const response = await fetch(
            `https://nodejs-serverless-function-express-seven-sand.vercel.app/api/users?x-vercel-protection-bypass=${process.env.NEXT_PUBLIC_MONGODB_VERCEL_TOKEN}`,
            {
                method: req.method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(req.body),
            }
        );

        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Error in proxy:', error.message);
        res.status(500).json({ error: 'Failed to fetch data from external API' });
    }
}
