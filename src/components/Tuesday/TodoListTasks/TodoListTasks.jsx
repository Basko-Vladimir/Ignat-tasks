import React from 'react';
import '../Tuesday.css';
import TodoListTask from "../TodoListTask/TodoListTask";


class TodoListTasks extends React.Component {
    render = () => {
        let tasksElements = this.props.tasks.map(
                task => <TodoListTask key={task.id}
                                      task={task}
                                      changeTitle={this.props.changeTitle}
                                      changeStatus={this.props.changeStatus}
                                      deleteTask={this.props.deleteTask} />);
        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;

