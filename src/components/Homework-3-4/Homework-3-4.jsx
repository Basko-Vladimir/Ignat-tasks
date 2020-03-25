import React from "react";
import styles from "./Homework-3-4.module.css"
import SumNames from "./SumNames/SumNames";
import NameInput from "./NameInput/NameInput";
import AddNameBtn from "./AddNameBtn/AddNameBtn";
import ShowNames from "./ShowNames/ShowNames";

class Homework34 extends React.Component {
    inputValue = React.createRef();
    spanValue = React.createRef();

    addName = () => {
        let inputValue = this.inputValue.current.value;
        this.setState({
            ...this.state,
            names: [...this.state.names, inputValue]
        });
        this.inputValue.current.value = '';
        // alert(`Привет ${inputValue}`);
    };

    state = {
        names: []
    };

    render = () => {
        return (
            <div className={styles.block}>
                <SumNames spanValue={this.spanValue} names={this.state.names}/>
                <div>
                    <NameInput inputValue={this.inputValue}/>
                    <AddNameBtn addName={this.addName}/>
                </div>
                <ShowNames names={this.state.names}/>
            </div>
        )
    }
}

export default Homework34;
