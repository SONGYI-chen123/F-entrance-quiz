import React, { Component } from 'react';
import '../style/Grouping.css';
import Group from './Group';
// TODO GTB-工程实践: - Grouping这个组件的命名不合理。Grouping是动词名词化，但是本质上还是表示一个动作，但是组件本身就是名词性质的，所以叫Groups个合适
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
        // TODO GTB-工程实践: - showGroups命名和不合理。变量的名字本身和它被赋予的值不对应。
        const showGroups = this.state.groups.map(item =>
            <Group groupName={item.groupName} member={item.member}/>)
        return(
            <div>
                <div className="group">
                {/* // TODO GTB-知识点: - 分组列表和分组成员不构成列表元素的关系，这里使用ul,li不正确 */}
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