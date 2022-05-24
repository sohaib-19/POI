import React, { Fragment, useEffect } from 'react';

// import { withRouter } from "react-router-dom";
import Layout from './Layout/Layout';
import Navbar from './Components/Navbar';
import MobileNav from './Components/MobileNav';

import './App.css';
class App extends React.Component {

    render() {
        window.scrollTo(0, 0);
        return (
            <Fragment>
                <Layout/>
                {/* <Navbar /> */}
                {/* <MobileNav/> */}
            </Fragment>
        )
    }
}

export default App;