import Home from "../Pages/Home";
import About from "../Pages/About";
import PortFolio from "../Pages/PortFolio";

const createRoute = (path, Element) => {
    return { path: path, element: Element }
}


export const routes = [
    createRoute('/', <Home />),
    createRoute('/about', <About />),
    createRoute('/portfolio', <PortFolio />),
    // createRoute('')

]; 