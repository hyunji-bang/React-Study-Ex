import React, { Component } from 'react';

class CheckList extends Component {
    render() {
        let tasks = this.props.tasks.map((task) => (
            <li className="checklist__task">
                <input type="checkbox" defaultChecked={task.done}/>
                {task.name}
                <a href="#" className="checklist__task--remove"></a>
            </li>
        ));

        return (
            <ul>
                {tasks}
            </ul>
        )
    }
}

export default CheckList;