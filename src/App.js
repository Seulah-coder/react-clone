import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Home from "./routes/Home";
import Movie from "./components/Movie";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/movie" element={<Movie />}/>
                <Route path="/" element={<Home />}/>
            </Routes>
        </Router>
    )

}

export default App;
