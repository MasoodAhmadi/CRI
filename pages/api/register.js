import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const filePath = path.join(process.cwd(), 'data', 'data.json');

    if (req.method === 'POST') {
        try {
            const existingData = fs.existsSync(filePath)
                ? JSON.parse(fs.readFileSync(filePath, 'utf8'))
                : [];

            // Find the highest existing id and increment by 1, or start at 1
            const nextId =
                existingData.length > 0
                    ? Math.max(...existingData.map(entry => Number(entry.id))) + 1
                    : 1;

            const newEntry = {
                ...req.body,
                id: nextId.toString()
            };

            const updatedData = [...existingData, newEntry];

            fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), 'utf8');

            res.status(200).json({ message: 'Data saved successfully', id: newEntry.id });
        } catch (error) {
            console.error('Error writing to file:', error);
            res.status(500).json({
                message: 'Failed to save data',
                error: error.message || error.toString(),
            });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
