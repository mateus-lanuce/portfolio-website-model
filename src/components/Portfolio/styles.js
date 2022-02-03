import styled, { css } from 'styled-components';

export const Section = styled.section`
    min-height: 100vh;
    padding: 2rem 0;

    background-color: var(--secondary-color);
`;

export const Background = styled.div`
    position: relative;

`;

export const Design1 = styled.img`
    position: absolute;
    z-index: 1;
    right: 8%;
    top: 0;
`;

export const Design2 = styled.img`
    position: absolute;
    z-index: 1;
    left: 0;
    top: 30rem;

    height: 40rem;
`;

export const PortfolioTitle = styled.div`
    z-index: 2;

    margin: 6rem 15rem;

    h2 {
        color: white;
        font-size: 2rem;
    }

    p {
        color: var(--primary-color);
        text-transform: uppercase;
        letter-spacing: 0.2rem;
    }
`;

export const Grid = styled.div`
    padding: 0 15rem;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 
        "one one two two"
        "one one three four"
        "five six seven seven"
        "eight six seven seven"
    ;


`;

export const PlaceHolder = styled.img`
    transition: 0.4s ease-in-out;
`;

const GridBox = css`

    height: 15rem;
    width: 100%;
    background-color: var(--primary-color);

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:nth-of-type(1) {
        grid-area: one;
        height: 100%;
        
        background-color: #8860e66a;
        z-index: 10;
    }
    &:nth-of-type(2) {
        grid-area: two;

        z-index: 10;
        background-color: #662d91ca;
    }
    &:nth-of-type(3) {
        grid-area: three;
        background-color: #8860e6b0;
    }
    &:nth-of-type(4) {
        grid-area: four;
    }
    &:nth-of-type(5) {
        grid-area: five;

        z-index: 10;
        background-color: #8860e6b0;
    }
    &:nth-of-type(6) {
        grid-area: six;
        height: 100%;
        
        background-color: #662d91ca;
    }
    &:nth-of-type(7) {
        grid-area: seven;
        height: 100%;
        background-color: #8860e66a;
    }
    &:nth-of-type(8) {
        grid-area: eight;
        z-index: 10;
    }

    &:hover {
        ${PlaceHolder} {
            transform: scale(1.2);
        }

    }

`;

export const ChildOne = styled.div`
    ${GridBox}


`;

export const ChildTwo = styled.div`
    ${GridBox}


`;

export const ChildThree = styled.div`
    ${GridBox}


`;

export const ChildFour = styled.div`
    ${GridBox}


`;

export const ChildFive = styled.div`
    ${GridBox}


`;

export const ChildSix = styled.div`
    ${GridBox}


`;

export const ChildSeven = styled.div`
    ${GridBox}


`;

export const ChildEight = styled.div`
    ${GridBox}


`;


export const PortfolioMore = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 1rem;
    margin: 4rem 0;

    span {
        color: white;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
    }

`;

export const LoadMore = styled.img`
    cursor: pointer;
`;