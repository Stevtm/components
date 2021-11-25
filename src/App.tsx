import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import theme and global style
import { GlobalStyles } from "./global";
import { theme } from "./theme";

// page imports
import Landing from "./pages/Landing";
import Cards from "./pages/Cards";

// component imports
import Nav from "./components/Nav";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <BrowserRouter>
                <Nav />
                <div>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/cards" element={<Cards />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
