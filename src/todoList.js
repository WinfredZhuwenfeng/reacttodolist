import React, { Fragment, Component } from 'react';
import './style.css'
import Todoitem from './todoItem'

class Todolist extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  render() {
    return (
      <Fragment>
        <h1>todoList</h1>
        <div>
          {/*这是注释*/}
          <label htmlFor="insertArea">点击这里</label>
          <input 
            id="insertArea"
            className='input'
            value={this.state.inputValue}
            onChange={this.handleChange}
            type="text" />
          <button onClick={this.handleClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}  
        </ul>
      </Fragment>
      )
  }

  getTodoItem() {    
    return this.state.list.map((item, index)=>{
        return <Todoitem content={item}  index={index} key={index} handleDelte={this.handleDelete}/>      
      })       
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState(() => {
     return {
      inputValue: value
    }
    })
  }

  handleClick() {
    this.setState((preState) => {
      let list = [...preState.list, preState.inputValue];
      return {
      list,
      inputValue: ''
    }
    })    
  }

  handleDelete(index) {
    this.setState((preState) => {
      let list = [...preState.list];
      list.splice(index, 1)
     return {
      list
    }
    })
  }
}

export default Todolist;
