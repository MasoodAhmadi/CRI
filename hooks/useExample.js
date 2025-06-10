import { useState, useEffect } from 'react';

export default function useExample() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/hello')
            .then(res => res.json())
            .then(json => setData(json.message));
    }, []);

    return data;
}
