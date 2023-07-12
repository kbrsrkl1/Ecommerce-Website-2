import {BuyOnline, Contact, Home, Navbar, PopularProducts, Reviews, Shopping } from "./components";
import "./sass/main.scss"

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <PopularProducts />
            <Shopping />
            <BuyOnline />
            <Reviews/>
            <Contact />
        </>
    );
}

export default App;
