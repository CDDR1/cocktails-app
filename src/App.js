import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from "./routes/About";

function App() {
    return (
        <div className="App bg-ghost-white min-h-screen">
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/About" element={<About />} exact />
            </Routes>
        </div>
    );
}

export default App;
