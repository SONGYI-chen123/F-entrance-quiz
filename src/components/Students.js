import React, { Component } from 'react';
import Student from "./Student";
import '../style/Students.css';


class Students extends Component{
    constructor(props){
        super(props);

        this.state= {
            students:[
                {
                    id: 1,
                    name: "成吉思汗"
                },
                {
                    id: 2,
                    name: "鲁班七号"
                },
                {
                    id: 3,
                    name: "太乙真人"
                },
                {
                    id:4,
                    name: "钟无艳"
                }
            ]
        }
    }

    componentDidMount = () => {
        fetch("http://localhost:8080/student").then(function(res){
            this.setState = {
                students: res
            }
            console.log("成功",res)
        }).catch(function(err){
            console.log("失败",err)
        })
      };


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