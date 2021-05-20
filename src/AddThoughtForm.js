import React, { useState } from 'react';

import {generateId, getNewExpirationTime} from './utilities';

export const AddThoughtForm = (props) => {
    const [text, setText] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const thought = {
            id: generateId(),
            text: text,
            expiresAt: getNewExpirationTime(),
        }

        if(text.length) {
            props.addThought(thought);
        }

        setText('');
        

    }
    return(
        <form className="AddThoughtForm" onSubmit={handleSubmit}>
            <input 
            className="text-area"
            value={text}
            onChange={handleTextChange}
            type='text' 
            aria-label="What's on your mind?"
            placeholder=" What's on your mind?"
            >
            </input>
            <input className="submit-btn" type='submit' value='Add'></input>
        </form>
    )
}