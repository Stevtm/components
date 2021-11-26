import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

// import theme and global style
import { GlobalStyles } from "./global";
import { theme } from "./theme";

// page imports
import Landing from "./pages/Landing";
import Cards from "./pages/Cards";
import Buttons from "./pages/Buttons";
import Text from "./pages/Text";

// component imports
import Nav from "./components/Nav";

// main body container
const MainContent = styled.div`
    /* box model */

    /* layout */
    margin: 1rem;

    /* visual */
`;

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <BrowserRouter>
                <Nav />
                <MainContent>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/cards" element={<Cards />} />
                        <Route path="/buttons" element={<Buttons />} />
                        <Route path="/text" element={<Text />} />
                    </Routes>
                </MainContent>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
