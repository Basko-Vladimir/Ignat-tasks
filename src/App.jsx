import React from 'react';
import './App.css';
import Monday from "./components/Monday/Monday";
import Tuesday from "./components/Tuesday/Tuesday";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Wednesday from "./components/Wednesday/Wednesday";
import Thursday from "./components/Thursday/Thursday";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <div>
                <Route path={'/monday'} render={() => <Monday/>} />
                <Route path={'/tuesday'} render={() => <Tuesday/>} />
                <Route path={'/wednesday'} render={() => <Wednesday/>} />
                <Route path={'/thursday'} render={() => <Thursday/>} />
            </div>
        </div>
    );
}

export default App;
