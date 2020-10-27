import React, { Component } from 'react';
import '../style/Grouping.css';
import Group from './Group';

class Grouping extends Component{
    constructor(props){
        super(props);
        this.state ={
            groups:[
            {
                groupName:"1组",
                member: "1 成吉思汗"
            },
            {
                groupName:"2组",
                member: "2 鲁班七号"
            }
        ]
    }
    }

    render(){
        const showGroups = this.state.groups.map(item =>
            <Group groupName={item.groupName} member={item.member}/>)
        return(
            <div>
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
                <div>
                    {showGroups}
                </div>
            </div>
            

        );
    }
}

export default Grouping;