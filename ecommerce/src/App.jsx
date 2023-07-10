import {BuyOnline, Home, Navbar, PopularProducts, Shopping } from "./components";
import "./sass/main.scss"

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <PopularProducts />
            <Shopping />
            <BuyOnline />
        </>
    );
}

export default App;
