import React from "react";
import styles from "./TodoList.module.css"
import SumNames from "./SumNames/SumNames";
import Input from "./Input/Input";
import AddNameBtn from "./AddNameBtn/AddNameBtn";
import ShowNames from "./ShowNames/ShowNames";

class TodoList extends React.Component {

    state = {
        names: [],
        inputValue: '',
        isEmptyValue: false
    };

    addName = () => {
        if (this.state.inputValue) {
            this.setState({
                ...this.state,
                names: [...this.state.names, this.state.inputValue],
                inputValue: ''
            });
        } else {
            this.setState({
                isEmptyValue: true
            })
        }
    };

    changeInputValue = (e) => {
        let newValue = e.currentTarget.value;
        this.setState({
            inputValue: newValue,
            isEmptyValue: false
        })
    };

    keyPressEnter = (e) => {
        if (e.key === 'Enter') {
            this.addName()
        }
    };

    render = () => {
        return (
            <div className={styles.block}>
                <SumNames names={this.state.names}/>
                <div>
                    <Input inputValue={this.state.inputValue}
                           changeInputValue={this.changeInputValue}
                           keyPressEnter={this.keyPressEnter}
                           isEmptyValue={this.state.isEmptyValue}/>
                    <AddNameBtn addName={this.addName} />
                </div>
                <ShowNames names={this.state.names}/>
            </div>
        )
    }
}

export default TodoList;
