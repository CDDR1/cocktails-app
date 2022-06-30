import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import CocktailList from "./components/CocktailList";
import CocktailCard from "./components/CocktailCard";
import { Routes, Route } from 'react-router-dom';
import About from "./routes/About";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={
                    <>
                        <Navbar />
                        <Searchbar />
                        <CocktailList />
                    </>
                } exact />
                <Route path="/About" element={<About />} exact />
            </Routes>
        </div>
    );
}

export default App;
