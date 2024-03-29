import React from 'react';
import Main from '../layouts/main/Main';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../documents/home/Home';
import Error from '../documents/error/Error';
import Login from '../accounts/login/Login';
import RegisterForm from '../accounts/register/RegisterForm';
import Profile from '../accounts/profile/Profile';


const Router = () => {
    const router=createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/register',
                    element:<RegisterForm></RegisterForm>
                },
{
    path:'/profile',
    element:<Profile></Profile>
}
                
            ],
         
        },
        {
            path:'/*',
            element:<Error></Error>
        }
    ])
    return (
        <RouterProvider router={router}>
        </RouterProvider>
    );
};

export default Router;