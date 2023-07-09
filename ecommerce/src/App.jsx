import {buyOnline ,Home, Navbar, PopularProducts, Shopping } from "./components";
import "./sass/main.scss"

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <PopularProducts />
            <Shopping />
            <buyOnline />
        </>
    );
}

export default App;
