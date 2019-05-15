import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import store from './store'
import { INPUT_CHANGE_VAULE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './store/actionTypes'

class TodoListAntd extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleChange = this.handleChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return(
      <div>
        <Input 
          onChange={this.handleChange}
          placeholder="Basic usage" 
          value={this.state.inputValue} 
          style={{width: '300px'}} />
        <Button type="primary" onClick={this.handleClick}>Primary</Button>
        <List          
          style={{width: '300px'}}
          size="small"
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => <List.Item onClick={this.handleDelete.bind(this, index)}>{item}</List.Item>}
        />
      </div>
    )
  }
  handleChange(e) {
    const action = {
      type: INPUT_CHANGE_VAULE,
      value: e.target.value
    }
    store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleClick() {
    const action = {
      type: ADD_TODO_ITEM
    }
    store.dispatch(action)
  }
  handleDelete(index) {
    const action = {
      type: DEL_TODO_ITEM,
      index
    }
    store.dispatch(action)
  }
}

export default TodoListAntd
