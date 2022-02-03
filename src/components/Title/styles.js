import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: relative;

    ${props => {
        if(props.sideLeft) {
            console.log(props.sideLeft)
            return css`
                z-index: 2;
                ${TitleContent} {
                    color: white;
                }
            `;
        }
    }}
`;

export const TitleContent = styled.h1`
    position: absolute;
    transform: translateX(-47%) translateY(20vw) rotate(-90deg);

    font-size: 7rem;
    text-transform: uppercase;
    color: var(--secondary-color);
    font-weight: 100;
`;
