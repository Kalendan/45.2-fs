
import { useState } from 'react';
import './colorChanger.css';

export function ColorChanger() {
    const [color, setColor] = useState('white');
    
    return (
        <div className="color-changer" style={{ backgroundColor: color }}>
            <button onClick={() => setColor('red')}>Red</button>
            <button onClick={() => setColor('green')}>Green</button>
            <button onClick={() => setColor('blue')}>Blue</button>
        </div>
    );
}