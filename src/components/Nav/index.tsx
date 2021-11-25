// styled component imports
import {
    NavContainer,
    Logo,
    NavButtonsList,
    NavButton,
    NavLink,
} from "./styles";

const Nav: React.FC = () => {
    return (
        <NavContainer>
            <Logo>components</Logo>
            <NavButtonsList>
                <NavButton>
                    <NavLink>Cards</NavLink>
                </NavButton>
                <NavButton>
                    <NavLink>Buttons</NavLink>
                </NavButton>
                <NavButton>
                    <NavLink>Text</NavLink>
                </NavButton>
                <NavButton>
                    <NavLink>Cards</NavLink>
                </NavButton>
            </NavButtonsList>
        </NavContainer>
    );
};

export default Nav;
