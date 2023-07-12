import {BuyOnline, Contact, Footer, Home, Navbar, PopularProducts, Reviews, Shopping } from "./components";
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
            <Footer />
        </>
    );
}

export default App;
