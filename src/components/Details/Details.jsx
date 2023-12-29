import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Details.css';


const Details = () => {
    const emojiDetails = useSelector((state) => state.getEmojiDetails);
    let naigate =useNavigate();
    const handleClick = () => {
        naigate('/');
    }
    
  return (
    <div className="emoji-container">
    <button onClick={() => handleClick()}>Back to Emojis</button>
    {emojiDetails.data.map((emoji) => {
        return (
            <div className="emoji-card">
                <h1>{emoji.category}</h1>
                <h3>{emoji.name}</h3>
               
            </div>
        );
    })}
</div>

  )
}

export default Details
