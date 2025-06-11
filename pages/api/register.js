import { supabase } from '../../supabaseClient';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { data, error } = await supabase
                .from('members')
                .insert([
                    {
                        name: 'Test',
                        lastName: 'User',
                        email: 'test@example.com',
                        phone: '123456789',
                        address: '123 Street',
                        city: 'Testville',
                        membership: 'basic'
                    }
                ]);
            if (error) {
                console.error('Supabase insert error:', error.message || error);
                return res.status(500).json({ message: 'Insert failed', error: error.message || error });
            }

            return res.status(200).json({ message: 'Data saved successfully', data });
        } catch (err) {
            console.error('Unexpected error:', err);
            return res.status(500).json({ message: 'Unexpected error', error: err.message });
        }
    } else {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
}
