import React from 'react';
import './Tuesday.css';
import TodoListHeader from "./TodoListHeader/TodoListHeader";
import TodoListTasks from "./TodoListTasks/TodoListTasks";
import TodoListFooter from "./TodoListFooter/TodoListFooter";
import {saveState, restoreState} from "../../common/useLocalStorage";
import {operationsDate} from "../../common/dateOperations";


class Tuesday extends React.Component {
    componentDidMount() {
        this.setState(restoreState('our-state', this.state));
    }

    state = {
        tasks: [],
        filterValue: "All",
        nextTaskId: 0
    };

    changeTask = (taskId, obj) => {
        let changingDate = operationsDate.getCurrentDate();
        let newTasks = this.state.tasks.map( t => {
            if (t.id === taskId && obj.isDone){
                return {...t, ...obj, finished: changingDate}
            } else if (t.id === taskId) {
                return {...t, ...obj, updated: changingDate}
            } else {
                return t
            }
        });
        this.setState({
            tasks:newTasks
        }, () => saveState('our-state', this.state) )
    };

    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone})
    };

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title})
    };

    deleteTask = (taskId) => {
        let newTasks = this.state.tasks.filter( t => t.id !== taskId);
        this.setState({
            tasks: newTasks
        }, () => saveState('our-state', this.state) )
    };

    onAddTaskClick = (newText) => {
        let creatingDate = operationsDate.getCurrentDate();
        let newTask = {
            id: this.state.nextTaskId,
            title: newText,
            isDone: false,
            priority: "low",
            created: creatingDate
        };
        let newTasks = [...this.state.tasks, newTask];
        this.setState( {
            tasks: newTasks,
            nextTaskId: this.state.nextTaskId + 1
        }, () => saveState('our-state', this.state) );
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        })
    };

    changeTaskPriority = (priority, taskId) => {
        this.changeTask(taskId, {priority});
    };

    render = () => {
        return (
            <div className="tuesday">
                <div className="todoList">
                    <TodoListHeader addTask={this.onAddTaskClick}/>
                    <TodoListTasks  changeStatus={this.changeStatus}
                                    changeTaskPriority={this.changeTaskPriority}
                                    changeTitle={this.changeTitle}
                                    deleteTask={this.deleteTask}
                                    tasks={this.state.tasks.filter( t => {
                                        switch (this.state.filterValue) {
                                            case 'All':
                                                return true;
                                            case 'Active':
                                                return t.isDone;
                                            case 'Completed':
                                                return !t.isDone;
                                            default:
                                                return alert('error');
                                    }})}/>
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue} />
                </div>
            </div>
        );
    }
}

export default Tuesday;