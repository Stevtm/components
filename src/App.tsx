import { ThemeProvider } from "styled-components";

// import theme and global style
import { GlobalStyles } from "./global";
import { theme } from "./theme";

// page imports
import Landing from "./pages/Landing";

// component imports
import Nav from "./components/Nav";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Nav />
            <Landing />
        </ThemeProvider>
    );
};

export default App;
