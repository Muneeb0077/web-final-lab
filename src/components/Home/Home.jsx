import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getEmojiInfo } from '../../features/GetEmojiSlice/getEmojiSlice';
import { getEmojiDetailsInfo } from '../../features/GetEmojiDetails/getEmojiDetailsSlice';
import {useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {

    const dispatch = useDispatch();
    let naigate =useNavigate();
    

    useEffect(() => {

        const fetchApiData = async () => {
            const response = await fetch('https://emojihub.yurace.pro/api/all')
            const data = await response.json();
            const uniqueCategories = Array.from(new Set(data.map(entry => entry.category)))
            console.log(uniqueCategories);
            
                dispatch(getEmojiInfo(uniqueCategories))
            
        }

        fetchApiData();

    }, [dispatch])
    
    const emojiData = useSelector((state) => state.getEmoji);

    const handleClick = async (emoji) => {
        console.log(emoji);
        const response = await fetch(`https://emojihub.yurace.pro/api/all/category/${emoji}`);
        const data = await response.json();
        const uniqueCategories = Array.from(new Set(data.map(entry => entry)))
        dispatch(getEmojiDetailsInfo(uniqueCategories));
        naigate('/details');
    }

  return (
    <>
    <div className="emoji-container2">
        <h1>Welcome to Emoji</h1>
        {emojiData.data.map((emoji) => (
            <div className="emoji-card2" key={emoji} onClick={() => handleClick(emoji)}>
                <h3>{emoji}</h3>
            </div>
        ))}
    </div>
</>

  )
}

export default Home

