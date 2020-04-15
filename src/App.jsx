import React from 'react';
import './App.css';
import Monday from "./components/Monday/Monday";
import Tuesday from "./components/Tuesday/Tuesday";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Wednesday from "./components/Wednesday/Wednesday";
import Thursday from "./components/Thursday/Thursday";
import Preloader from "./components/Tuesday/Preloader/Preloader";


class App extends React.Component {
    state = {
        isLoading: true
    };

    componentDidMount() {
        setTimeout(this.changeIsLoading, 3000);
    }

    changeIsLoading = () => {
        this.setState({isLoading: false})
    };

    render() {
        return (
            <div className="App">
                { this.state.isLoading
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

export default App;
