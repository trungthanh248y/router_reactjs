import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import React from 'react';
import Products from './components/Products';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Home />
    },
    {
        path : '/about',
        exact : false,
        main : () => <About />
    },
    {
        path : '/products',
        exact : false,
        main : ({match}) => <Products match={match}/>
    },
    {
        path : '',
        exact : false,
        main : () => <NotFound />
    },
];

export default routes;