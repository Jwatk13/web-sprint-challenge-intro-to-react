// Write your Character component here
import React from 'react';

const Character = (props) => {
    return (
        <div className='character-data-wrapper'>
            <h3>Name: {props.card}</h3>
                <p>
                  Gender: {props.gender},
                  Height: {props.height}cm,
                  Mass: {props.mass},
                  Hair Color: {props.hairColor}
                </p>
        </div>
    );
}

export default Character;