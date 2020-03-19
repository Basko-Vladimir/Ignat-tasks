import React from "react";
import styles from "./Homework3.module.css"

class Homework3 extends React.Component{
    constructor(props) {
        super(props);
        this.inputValue = React.createRef();
        this.spanValue = React.createRef();
    }


    changeSpan = () => {
        let inputValue = this.inputValue.current.value;
        Number(this.spanValue.current.textContent++);
        this.inputValue.current.value = '';
        alert(`Привет ${inputValue}`);
    };

    render = () => {
        return (
            <div className={styles.block}>
                <span ref={this.spanValue} id='number'>1</span>
                <input ref={this.inputValue} id='enteredName' type="text"/>
                <button onClick={this.changeSpan}>Enter</button>
            </div>
        )
    }
}

export default Homework3;
