// Write your Character component here
import React from 'react';

const Character = (props) => {
    return (
        <div className='character-data-wrapper'>
            <h3>Name: {props.card.name}</h3>
        </div>
    );
}

export default Character;