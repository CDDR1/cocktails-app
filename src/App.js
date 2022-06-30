import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import CocktailList from "./components/CocktailList";
import CocktailCard from "./components/CocktailCard";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Searchbar />
            <CocktailList />
        </div>
    );
}

export default App;
