import React from 'react';

export const AddThoughtForm = () => {
    return(
        <form className="AddThoughtForm">
            <input 
            className="text-area"
            type='text' 
            type="text"
            aria-label="What's on your mind?"
            placeholder=" What's on your mind?"
            >
            </input>
            <input className="submit-btn" type='submit' value='Add'></input>
        </form>
    )
}