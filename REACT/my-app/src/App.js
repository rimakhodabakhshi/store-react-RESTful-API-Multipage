import React, {Component} from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./component/Navbar";
import Landing from "./component/Landing";
import products from "./component/Products";
import Footer from "./component/Footer";
import AboutUs from "./component/AboutUs";
import DetailsPage from "./component/DetailsPage";
import NotFound from "./component/NotFound";
import Programmers from "./component/Programmers";


class App extends Component {

    render() {
        return (
            <div>
              <Navbar/>
              <Routes>
                 <Route path="/" element={<Landing/>}/>
                 <Route path="/Products" Component={products}/>
                 <Route path="/Products/:id" Component={DetailsPage}/>
                 <Route path="/AboutUs/*" Component={AboutUs}>
                     <Route path="Programmers" element={<Programmers/>}/>
                     <Route path="drivers" element={<h1>drivers</h1>}/>
                </Route>
                 <Route path="/NotFound" Component={NotFound}/>
                 <Route path="/*" element={<Navigate to="/NotFound"/>}/>
                 
              </Routes>
              
              <Footer/>
            </div>  

        )
    }
}



export default App;