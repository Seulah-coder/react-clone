import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    console.log("111");
    return (
        <Router>
            <Routes>
                <Route basename={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail />}/>
                <Route basename={`${process.env.PUBLIC_URL}/`} element={<Home />}/>
            </Routes>
        </Router>
    )

}

export default App;
