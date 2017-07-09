import React, { Component } from 'react';
import {render} from 'react-dom';

class Search extends Component {
    constructor(){
        super();
        this.state = {
            searchTerm: "React"
        }
    }
    render() {
        return (
            <div>
                Search Term: <input type="search" value={this.state.searchTerm}/>
            </div>
        );
    }
}

render(<Search />, document.body);