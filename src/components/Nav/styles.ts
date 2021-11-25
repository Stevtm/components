import styled from "styled-components";

export const NavContainer = styled.nav`
    /* box model */
    padding: 0.25rem 0.5rem;
    width: 100%;

    /* layout */
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    /* visual */
    background-color: ${({ theme }) => theme.pastelBlue.lighter};
`;

export const Logo = styled.h1`
    /* box model */

    /* layout */

    /* visual */
    color: ${({ theme }) => theme.pastelBlue.darkest};
    font-size: 1.125rem;
    line-height: 1.75rem;
`;

export const NavButtonsList = styled.ul`
    /* box model */

    /* layout */
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
    cursor: pointer;
    list-style: none;
`;
