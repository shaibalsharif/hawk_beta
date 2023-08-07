import Home from "../Pages/Home";
import About from "../Pages/About";
import PortFolio from "../Pages/PortFolio";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
import PortfolioDetails from "../Pages/PortfolioDetails";
import Admin from "../Pages/Admin";

const createRoute = (path, Element) => {
    return { path: path, element: Element }
}


export const routes = [
    createRoute('/', <Home />),
    createRoute('/about', <About />),
    createRoute('/portfolio', <PortFolio />),
    createRoute('/services', <Services />),
    createRoute('/portfolio', <PortFolio />),
    createRoute('/contact', <Contact />),
    createRoute('/portfolio/*', <PortfolioDetails />),
    createRoute('/admin', <Admin />),
]; 