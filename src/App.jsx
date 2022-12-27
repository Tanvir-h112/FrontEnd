import { Router } from '@gatsbyjs/reach-router'
import React from 'react'
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Help from "./component/pages/Help";
import ClockPage from './component/pages/ClockPage';
import Tasks from './component/pages/Tasks';


const App = ()=> {
    return (
        <Router>
            <Home path='/' />
            <About path='/about' />
            <Help path='/help' />
            <ClockPage path='/clock' />
            <Tasks path='/tasks' />
        </Router>
    )
}

export default App;