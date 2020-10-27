import React, { Component } from 'react';
import '../style/Student.css';

class Student extends Component{

    render(){
        return(
            <div className="stu">
                <ul>
                    <li>{this.props.id}</li>
                    <li>{this.props.name}</li>
                </ul>
            </div>
        );
    }
}

export default Student;