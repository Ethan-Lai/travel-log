import { useState, useEffect } from 'react';

function Home() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:5001/api/test')
        .then(res => res.json())
        .then(data => setMessage(data.message))
        .catch(err => console.error(err));
    }, []);

    return (
        <div style={{ padding: '20px' }}>
        <h1>My MERN App</h1>
        <p>{message || 'Loading...'}</p>
        </div>
    );
}

export default Home;