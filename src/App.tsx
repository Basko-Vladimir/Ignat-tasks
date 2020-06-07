import React from 'react';
import './App.css';
import Monday from "./components/Monday/Monday";
import Tuesday from "./components/Tuesday/Tuesday";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Wednesday from "./components/Wednesday/Wednesday";
import Thursday from "./components/Thursday/Thursday";
import {connect} from "react-redux";
import {setLoadingSuccess} from "./redux/loading-reducer";
import {AppStateType} from "./redux/store";

type MapStatePropsType = {
    isLoading: boolean
}

class App extends React.Component<MapStatePropsType> {
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

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isLoading: state.loading.isLoading
    }
};

export default connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToProps, {setLoadingSuccess})(App);
