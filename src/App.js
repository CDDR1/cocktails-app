import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import CocktailDetails from "./routes/CocktailDetails";
import { AppProvider } from "./contexts/AppContext";

function App() {
    return (
        <div className="App bg-primary min-h-screen">
            <AppProvider>
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/About" element={<About />} exact />
                    <Route path="/CocktailDetails/:id" element={<CocktailDetails />} />
                </Routes>
            </AppProvider>
        </div>
    );
}

export default App;
