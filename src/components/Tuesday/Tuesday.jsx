import React from 'react';
import './Tuesday.css';
import TodoListHeader from "./TodoListHeader/TodoListHeader";
import TodoListTasks from "./TodoListTasks/TodoListTasks";
import TodoListFooter from "./TodoListFooter/TodoListFooter";
import {saveState, restoreState} from "./useLocalStorage";


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
        let changingDate = this.getDate();
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
        let creatingDate = this.getDate();
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

    getDate = () => {
        let currentDate = new Date();

        let date = +currentDate.getDate();
        date = this.dateFormatCorrect(date);

        let month = +currentDate.getMonth() + 1;
        month = this.dateFormatCorrect(month);

        let year = +currentDate.getFullYear();

        let hours = +currentDate.getHours();
        hours = this.dateFormatCorrect(hours);

        let minutes = +currentDate.getMinutes();
        minutes = this.dateFormatCorrect(minutes);

        return `${date}.${month}.${year} ${hours}:${minutes}`
    };

    dateFormatCorrect = (value) => {
        if (value < 10) {
            value = `0${value}`
        }
        return value
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