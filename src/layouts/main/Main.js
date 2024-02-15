import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../documents/shared/foot/Footer';
import Header from '../../documents/shared/nav/Header';
import TopBar from '../../documents/shared/nav/TopBar';

const Main = () => {
    return (
        <>
        <TopBar></TopBar>
         <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </>
    );
};

export default Main;