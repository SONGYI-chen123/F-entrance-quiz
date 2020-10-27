import React, { Component } from 'react';
import '../style/Group'

class Group extends Component{

    render(){
        return(
            <div className="team">
                <h2>{this.props.groupName}</h2>
                <p>{this.props.member}</p>
            </div>
        );
    }
}

export default Group;