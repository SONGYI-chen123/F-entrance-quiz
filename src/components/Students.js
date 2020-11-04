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
        // TODO GTB-工程实践: - API请求应该被抽取到单独的文件
        // TODO GTB-工程实践: - 建议使用ES6的箭头函数
        fetch("http://localhost:8080/student").then(function (res){
            this.setState = {
                students: res
            }
            // TODO GTB-工程实践: - console.log不应该被提交
            console.log("成功",res)
        }).catch(function(err){
            console.log("失败",err)
        })
      };


    render(){
        // TODO GTB-工程实践: - showStudent本质上是一个动词性质的，而=后面的是一个Array, Array是一个名词性质的
        // TODO GTB-工程实践: - JSX的列表渲染，一般不用单独抽变量出来，直接放到JSX的{}就行了
        // TODO GTB-工程实践: - React里面的列表元素，每一个item都需要一个key
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