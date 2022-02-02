import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 0 12rem;
    padding-top: 2rem;

`;

export const BrandContainer = styled.div`
    margin: 0 2rem;
`;

export const Brand = styled.a`

`;

export const BrandImage = styled.img`

`;

export const Toggle = styled.div`
    display: none;
`;

export const Links = styled.div`
    
`;

export const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;

    gap: 3rem;
`; 

export const Li = styled.li`
    
`;

export const Active = styled.a`
    border-bottom: 0.2rem solid var(--secondary-color);
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;
`;

export const Link = styled.a`
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;

`;