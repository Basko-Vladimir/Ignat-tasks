import React from 'react';
import './App.css';
import Monday from "./components/Monday/Monday";
import Tuesday from "./components/Tuesday/Tuesday";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Wednesday from "./components/Wednesday/Wednesday";
import Thursday from "./components/Thursday/Thursday";
import Preloader from "./components/Tuesday/Preloader/Preloader";
import {connect} from "react-redux";
import {setLoadingAC} from "./redux/store";

class App extends React.Component {
    componentDidMount() {
        setTimeout(() => this.props.setLoading(false), 3000);
    }

    render() {
        return (
            <div className="App">
                { this.props.loading
                ? <Preloader/>
                : <div>
                    <Navbar/>
                    <div>
                        <Route path={'/monday'} render={() => <Monday/>} />
                        <Route path={'/tuesday'} render={() => <Tuesday/>} />
                        <Route path={'/wednesday'} render={() => <Wednesday/>} />
                        <Route path={'/thursday'} render={() => <Thursday/>} />
                    </div>
                </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading
    }
};

const  mapDispatchToProps = (dispatch) => {
    return {
        setLoading: (loadingValue) => {
            dispatch(setLoadingAC(loadingValue))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
