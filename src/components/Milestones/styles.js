import styled from 'styled-components';

export const Section = styled.section`
    height: 100vh;
    background-color: var(--primary-color);
    padding-left: 0 10rem;

    position: relative;
    overflow: hidden;
`;

export const Backgroud = styled.img`
    position: absolute;
    left: 0;
    bottom: -30%;

    height: 43rem;
    z-index: 2;
`;

export const Milestone = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 100%;

    color: white;
`;

export const MilestoneItem = styled.div`
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    gap: 2rem;

    p {
        font-size: 5rem;
        font-weight: bolder;
        line-height: 3rem;
    }

    span {
        text-transform: uppercase;
        color: #ffffffc7;
    }

    img {
        height: 6rem;
    }
`;