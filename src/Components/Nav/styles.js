import styled from "styled-components";

export const Head = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 3%;
`;

export const Navbar = styled.div`
    background-color:#FFFFFF;
    border-radius: 3rem;
    padding: 0.7rem;
    width: 60%;
    
`;

export const NavItems = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    color: #5E5E5E;

`;

export const ItemList = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: #5E5E5E;
    &:hover {
        color: #FF1A1A;
        font-size: bold;
    }`;

export const Button = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: #5E5E5E;
    border: 1px solid #5E5E5E;
    padding: 0.7rem 3rem;
    border-radius: 3rem;
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

    &:hover {
        font-size: bold;
        color: #FFFFFF;
        background-color: #FF1A1A;
    }
`;