import styled from "styled-components";

export const Button = styled.button`
  // box model
  border: 2px solid black;
  border-radius: 7px;
  padding: 0.5rem 0.75rem;

  // layout

  // visual
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1rem;
  transition: all 0.25s;

  :hover {
    background-color: black;
    color: white;
  }
`;
