import React, { Component } from 'react';
import '../style/Student.css';

class Student extends Component{

    render(){
        return(
            // TODO GTB-工程实践: - stu, 不要进行无意义的缩写
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