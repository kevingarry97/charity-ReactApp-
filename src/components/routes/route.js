import { Redirect, Route } from "react-router-dom"
import About from "../pages/about"
import Home from "../pages/home"
import NotFound from "../pages/notFound";

const Routes = () => {
    return ( 
        <>
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            <Redirect from="/" exact to="/home" />
        </>
    );
}
 
export default Routes;