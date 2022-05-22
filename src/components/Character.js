// Write your Character component here
import React from 'react';
import styled, { keyframes } from 'styled-components';

const keyFrame = keyframes`
    100% {
        opacity: 0.5;
    }
`

const StyledCharacter = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    margin: 0 auto;
    background-color: black;

    color: #ffe135;
    text-shadow: #ffe135 0.25px 1px 2px;

  

    .slider:hover, .slide-up:hover {
        opacity: 1;
        transform: scale(2);
        animation: ${keyFrame} 0.5s ease-in-out;
    }
    `

const Character = (props) => {
    return (
        <StyledCharacter className='character-data-wrapper'>
            <h3 className='slider'>Name: {props.card}</h3>
              <p className='slide-up'>
                Gender: {props.gender},
                Height: {props.height}cm,
                Mass: {props.mass},
                Hair Color: {props.hairColor}
              </p>
            
        </StyledCharacter>
    );
}

export default Character;