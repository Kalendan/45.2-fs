import { useState } from 'react';
import { MyButton } from "../homeworks/Homework4/MyButton";
import './feedback.css';

export function Feedback() {
    // eslint-disable-next-line no-undef
    const [likes, setLikes] = useState(0);
    // eslint-disable-next-line no-undef
    const [dislikes, setDislikes] = useState(0);

    return (
        <div className="feedback-container">
            <span className="feedback-count">{likes}</span>
            <MyButton onClick={() => setLikes(likes + 1)}>Like</MyButton>
            <MyButton onClick={() => setDislikes(dislikes + 1)}>Dislike</MyButton>
            <span className="feedback-count">{dislikes}</span>
            <br />
            <MyButton onClick={() => { setLikes(0); setDislikes(0); }}>Reset Results</MyButton>
        </div>
    );
}
