// ## Namaste React Course by Akshay Saini
// # Chapter 06 - Exploring the world

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// AppLayout component to render: Header, Body and Footer Component
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      {/** if path is / */}
      {/**<Body />/*}
      {/**if path is /about */}
      {/**<About/>*/}
      <Outlet/>
    </React.Fragment>
  );
};

//ep7 defining configuration step1
const appRouter = createBrowserRouter([
{
  path: "/",
  element: <AppLayout/>,
  children: [
    {
      path: "/",
      element: <Body/>
    },
    {
      path: "/about",
      element:<About/>,
    },
    {
      path: "/restaurants/:resId",
      element: <RestaurantMenu/>
    },
    {
      path: "/contact",
      element:<Contact/>,
    },
  ],
  errorElement: <Error/>, 
},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);
//step2
root.render(<RouterProvider router={appRouter}/>)