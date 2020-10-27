import React, { Component } from 'react';
import '../style/Grouping.css';

class Grouping extends Component{
    render(){
        return(
            <div className="group">
                <ul>
                    <li>
                        <h1>分组列表</h1>
                    </li>
                    <li>
                        <button>分组成员</button>
                    </li>
                </ul>
            </div>

        );
    }
}

export default Grouping;