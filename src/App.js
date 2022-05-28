import React, { Fragment, useEffect } from 'react';
import { withRouter, BrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import './App.css';

function App() {
  window.scrollTo(0, 0);
    return (
      <BrowserRouter>
      <Layout />
      </BrowserRouter>
    )
  }
  

export default withRouter(App);