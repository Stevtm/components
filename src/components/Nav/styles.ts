import styled from "styled-components";

export const NavContainer = styled.nav`
    /* box model */
    border-bottom: solid 0.25rem ${({ theme }) => theme.pastelGreen.DEFAULT};
    padding: 0.25rem 1rem;
    width: 100%;

    /* layout */
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    /* visual */
    background-color: ${({ theme }) => theme.pastelGreen.lighter};
`;

export const Logo = styled.h1`
    /* box model */

    /* layout */

    /* visual */
    color: ${({ theme }) => theme.pastelGreen.darker};
    font-size: 1.25rem;
    line-height: 1.75rem;
`;

export const NavButtonsList = styled.ul`
    /* box model */

    /* layout */
    align-items: center;
    display: flex;
    flex-direction: row;

    /* visual */
`;

export const NavButton = styled.li`
    /* box model */
    padding: 0 0.5rem;

    /* layout */

    /* visual */
    list-style: none;
`;

export const NavLink = styled.a`
    /* box model */

    /* layout */

    /* visual */
    color: ${({ theme }) => theme.pastelGreen.darker};
    cursor: pointer;
    list-style: none;
    transition: 0.25s all;

    :hover {
        color: ${({ theme }) => theme.pastelGreen.DEFAULT};
    }
`;
