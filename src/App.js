import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import {useEffect} from "react";


function App() {
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);
  return (
    <>
        <Navbar/>
        <Home/>
    </>
  );
}

export default App;
