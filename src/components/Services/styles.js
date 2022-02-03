import styled, { css } from 'styled-components';

export const Section = styled.section`
    min-height: 100vh;
`;

export const ServicesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    align-items: center;
    height: 100%;

    margin: 0 14rem;
    margin-top: 10rem;
    gap: 5rem;
`;

export const Service = styled.div`
    padding: 2rem;

    ${props => {
        if(props.index === 2) {
            return css`
                background-color: var(--primary-color);
            `;
        }
    }}
`;

export const ServiceImage = styled.img`
    margin-bottom: 3rem;
`;

export const ServiceTitle = styled.div`  

    ${props => {
        if(props.index === 2) {
            return css`
                span { color: white; }
            `;
        } else {
            return css`
                span { 
                    color: var(--primary-color);
                }
            `
        }
    }}

    span {
        font-weight: bolder;
    }

    h2  {
        color: var(--secondary-color);
    }

    font-size: 1.5rem;
    line-height: 2.5rem;
    
    margin-bottom: 5rem;
`;

export const ServiceSubTitle = styled.p`
    ${props => {
        if(props.index === 2) {
            return css`
                color: white;
            `;
        } else {
            return css`color: var(--primary-color);`
        }
    }}

    margin-bottom: 2rem;
`;

export const Image = styled.img`

`;