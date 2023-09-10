import { createHashRouter, RouterProvider } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'
import Portfolio from './Components/Portfolio/Portfolio'


const routers = createHashRouter([
        {path:'/', element:<Layout/>, children: [
                {index:true, element:<Home/>},
                {path:'portfolio', element:<Portfolio/>},
                {path:'about', element:<About/>},
                {path:'contact', element:<Contact/>},
                {path:'*', element:<NotFound/>},
        ]}
])

export default function App(){
    
        return <>
           <RouterProvider router={routers}/>
        </>
}