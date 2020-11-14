import { Redirect, Route } from "react-router-dom"
import About from "../pages/about"
import Contact from "../pages/contact";
import Donate from "../pages/donate";
import Home from "../pages/home";

const Routes = () => {
    return ( 
        <>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/donate" component={Donate} />
            <Route path="/home" component={Home} />
            <Redirect from="/" exact to="/home" />
        </>
    );
}
 
export default Routes;