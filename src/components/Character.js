// Write your Character component here
import React from 'react';

const Character = (props) => {
    return (
        <div className='character-data-wrapper'>
            <h3>{props.card.name}</h3>
        </div>
    );
}

export default Character;