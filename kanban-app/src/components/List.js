import React, {Component} from 'react';
import Card from './Card';

class List extends Component {
    render() {
        console.log(this.props);

        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                <Card id={this.props.id}
                      title={this.props.title}
                      description={this.props.cards.description}
                      color={this.props.cards.color}
                      tasks={this.props.cards.tasks}/>
            </div>
        )
    }
}

export default List;