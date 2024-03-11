import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import PageNotFound from '../DefaultPages/PageNotFound';
import Home from '../Pages/Home';
import CategoryDetails from '../Pages/CategoryDetails';
import Admin from '../Pages/Admin';
import Contact from '../Pages/Contact';
import Services from '../Pages/Services';
import PortFolio from '../Pages/PortFolio';
import About from '../Pages/About';
import PortfolioDetails from '../Pages/PortfolioDetails';
import Login from '../Components/Login';

const Router = () => {
    const [user, setUser] = useState(null);

    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => {
            unsubscribe();
        };
    }, []);
    const handleLogout = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };
    const handleGoogleSignIn = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log(user);
            setUser(user);
        } catch (error) {
            console.error('Google sign-in error:', error);
        }
    };
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Home />}></Route>
                <Route exact path='/about' element={<About />}></Route>
                <Route exact path={'/portfolio'} element={<PortFolio />}></Route>
                <Route exact path={'/portfolio/:category'} element={<CategoryDetails />}></Route>
                <Route exact path={'/portfolio/:category/:id'} element={<PortfolioDetails />}></Route>
                <Route exact path={'/contact'} element={<Contact />}></Route>
                <Route exact path={'/services'} element={<Services />}></Route>
                <Route path="/login" element={user ? <Navigate to="/admin" /> : <Login />} />
                <Route path="/admin" element={user ? <Admin logoutHandler={handleLogout} /> : <Navigate to="/login" />} />

                {/*   {routes.map((route, index) => (
                    <Route key={"comp-"+index} exact path={route.path} element={route.element}></Route>
                ))} */}
                <Route exact path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default Router;