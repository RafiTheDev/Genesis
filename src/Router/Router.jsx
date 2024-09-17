import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Mainlayouts from "../Layouts/Mainlayouts";
import About from "../Components/About/About";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayouts></Mainlayouts>,


      children:[
        
      {
        path:'/about',
        element:<About></About>
      },
    ]

  },


    
  ]);


  export default router;