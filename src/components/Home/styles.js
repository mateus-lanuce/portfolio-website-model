import styled from 'styled-components';

export const Section = styled.section`
    background-image: url(${props => props.home});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    min-height: 100vh;

    position: relative;

`;

export const HomeContainer = styled.div`
    height: 100%;
`;

export const Content = styled.div`
    height: 100%;
    color: white;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 1.2rem;
    margin-top: 8rem;
    padding-left: 18rem;
    width: 70%;

`;

export const Title = styled.h1`
    font-size: 5rem;
    line-height: 5.3rem;
`;

export const SubTitle = styled.p`
    width: 70%;
    margin-bottom: 2rem;
`;

export const Play = styled.img`

`;

export const Info = styled.div`
    position: absolute;
    bottom: -6rem;
    right: 0;

    background-color: var(--secondary-color);
    color: white;

    padding: 4rem;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
`;

export const Col = styled.div`

`;

export const ColTitle = styled.strong`
    
`;