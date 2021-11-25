// import package dependencies
import { Link } from "react-router-dom";

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
            <Link to="/">
                <Logo>components</Logo>
            </Link>

            <NavButtonsList>
                <NavButton>
                    <Link to="/cards">
                        <NavLink>Cards</NavLink>
                    </Link>
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
