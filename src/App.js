import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from "./routes/About";
import CocktailDetails from './routes/CocktailDetails';

function App() {
    return (
        <div className="App bg-primary min-h-screen">
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/About" element={<About />} exact />
                <Route path="/Details/:id" element={<CocktailDetails />} />
            </Routes>
        </div>
    );
}

export default App;
