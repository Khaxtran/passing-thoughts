import React, { useEffect } from 'react';

export const Thoughts = (props) => {
    const { thought, onRemove } = props;

    const handleRemove = () => {
        onRemove(thought.id);
    }

    useEffect(() => {
            const timeRemaining = thought.expiresAt - Date.now();
            const timeout = setTimeout(() => {
                onRemove(thought.id);
            }, timeRemaining)
            return () => clearTimeout(timeout);
    }, [thought]);
    
    return(
        <li className='Thoughts'>
            <div className='text'>{`${thought.text} 💭`}</div>
            <button className='remove-button' aria-label='remove-button' onClick={handleRemove}>&times;</button>
        </li>
    )
}