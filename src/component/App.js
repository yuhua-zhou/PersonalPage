import React from 'react'
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import Navigation from "./Navigation"
import HomePage from "./HomePage/HomePage"
import About from './About/About'
import Other from './Other/Other'

class App extends React.Component{

    render(){
        return(
            <div>
                <Navigation/>
                <HomePage/>
            </div>
            // <Router>
            //     <Navigation/>
            //     <Switch>
            //         {/*<Redirect path={"/"} to={"/HomePage"}/>*/}
            //         <Route path={"/"} component={HomePage} exact />
            //         <Route path={"/HomePage"} component={HomePage}/>
            //         <Route path={"/Other"} component={Other}/>
            //         <Route path={"/About"} component={About}/>
            //     </Switch>
            // </Router>
        )
    }
}

export default App;