import React from 'react';
import '../Tuesday.css';

class TodoListTask extends React.Component {
    state = {
        editMode: false,
    };

    onIsDoneChanged = (event) => {
        this.props.changeStatus(this.props.task.id, event.currentTarget.checked);
    };

    onTitleChanged = (event) => {
        this.props.changeTitle(this.props.task.id, event.currentTarget.value)
    };

    activeEditMode = () => {
        this.setState({editMode: true})
    };

    deactivateEditMode = () => {
        this.setState({editMode: false})
    };

    onDeleteTask = () => {
        this.props.deleteTask(this.props.task.id);
    };

    onChangePriority = (e) => {
        this.props.changeTaskPriority(e.currentTarget.value, this.props.task.id)
    };

    classPriorityTask = (priority) => {
        switch (priority) {
            case 'low':
                return 'lowPriority';
            case 'middle':
                return 'middlePriority';
            case 'high':
                return 'highPriority';
            default: return '';
        }
    };

    showChangingDate = () => {
        let creatingDate = this.props.task.created;
        let updatedDate = this.props.task.updated ? this.props.task.updated : `Задача не изменялась`;
        let finishedDate = this.props.task.finished ? this.props.task.finished : `Задание не выполнено`;
        return `Дата создания : ${creatingDate} \nДата изменения: ${updatedDate} \n${this.props.task.isDone ? 'Задание выполнено: ' + finishedDate : ''}`;
    };

    render = () => {
        return (
                <div title={this.showChangingDate()} className={this.props.task.isDone ? `todoList-task done` : `todoList-task ${this.classPriorityTask(this.props.task.priority)}`}>
                    <input type="checkbox" checked={this.props.task.isDone}
                           onChange={this.onIsDoneChanged}/>
                    <div>
                        { this.state.editMode
                            ? <input autoFocus={true}
                                     value={this.props.task.title}
                                     onBlur={this.deactivateEditMode}
                                     onChange={this.onTitleChanged}/>
                            : <span onClick={this.activeEditMode}>{`${this.props.task.id} - ${this.props.task.title}` }</span>
                        }
                    </div>
                    <div>
                        <span> Priority: <select value={this.props.task.priority} onChange={this.onChangePriority}>
                                            <option value={'low'}>low</option>
                                            <option value={'middle'}>middle</option>
                                            <option value={'high'}>high</option>
                                        </select>
                        </span>
                    </div>
                    <div>
                        <button onClick={this.onDeleteTask}>Delete</button>
                    </div>
                </div>
        );
    }
}

export default TodoListTask;
// this.classPriorityTask(this.props.task.priority)
