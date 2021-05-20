import React from 'react';

export const Thoughts = (props) => {
    const { thought, removeThought } = props;
    return(
        <li className='Thoughts'>
            <div className='text'>{thought.text}</div>
            <button className='remove-button' aria-label='remove-button'>&times;</button>
        </li>
    )
}