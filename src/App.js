import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import {useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NotFound from "./pages/NotFound";



function App() {
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);
  return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </>
  );
}

export default App;
