import React from 'react';
import './App.css';
import Monday from "./components/Monday/Monday";
import Tuesday from "./components/Tuesday/Tuesday";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Wednesday from "./components/Wednesday/Wednesday";
import Thursday from "./components/Thursday/Thursday";
import {connect} from "react-redux";
import {setLoading} from "./redux/loading-reducer";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div>
                    <Navbar/>
                    <div>
                        <Route path={'/monday'} render={() => <Monday/>} />
                        <Route path={'/tuesday'} render={() => <Tuesday/>} />
                        <Route path={'/wednesday'} render={() => <Wednesday/>} />
                        <Route path={'/thursday'} render={() => <Thursday/>} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.loading.isLoading
    }
};

export default connect(mapStateToProps, {setLoading})(App);
