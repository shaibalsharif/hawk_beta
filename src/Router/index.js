import React from 'react'
import { routes } from './createRoute'
import { Routes, Route, } from "react-router"
import PageNotFound from '../DefaultPages/PageNotFound'
import Home from '../Pages/Home'
import CategoryDetails from '../Pages/CategoryDetails'
import Admin from '../Pages/Admin'
import Contact from '../Pages/Contact'
import Services from '../Pages/Services'
import PortFolio from '../Pages/PortFolio'
import About from '../Pages/About'
import PortfolioDetails from '../Pages/PortfolioDetails'

const Router = () => {


    return (
        <div>
            <Routes>
                <Route  path={'/'} element={<Home />}></Route>
                <Route exact path='/about' element={<About />}></Route>
                <Route exact path={'/portfolio'} element={<PortFolio />}></Route>
                <Route exact path={'/portfolio/:category'} element={<CategoryDetails />}></Route>
                <Route exact path={'/portfolio/:category/:id'} element={<PortfolioDetails />}></Route>
                <Route exact path={'/contact'} element={<Contact />}></Route>
                <Route exact path={'/services'} element={<Services />}></Route>
                <Route exact path={'/admin'} element={<Admin />}></Route>
                {/*   {routes.map((route, index) => (
                    <Route key={"comp-"+index} exact path={route.path} element={route.element}></Route>
                ))} */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default Router;