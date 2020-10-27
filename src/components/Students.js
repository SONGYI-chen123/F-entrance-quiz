import React, { Component } from 'react';
import Student from "./Student";
import '../style/Students.css';

class Students extends Component{
    constructor(props){
        super(props);

        this.state= {
            students:[]
        }
    }

    componentDidMount(){
        fetch("/student", {
            method : 'GET'
        }).then(function(res){
            if(res.ok){
                res.json().then(function(data){
                    this.setState({
                        students: data
                    })
                })
            }
      })

    }


    render(){
        const showStudent = this.state.students.map(item =>
            <Student id={item.id} name={item.name}/>)
        return(
            <div className="student">
                <h1>学员列表</h1>
                <div>
                    {showStudent}
                    
                </div>
            </div>

        );
    }
}

export default Students;