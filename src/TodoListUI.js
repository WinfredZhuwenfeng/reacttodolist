import React, { Component } from 'react';
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
  render() {
    return(
      <div>
        <Input 
          onChange={this.props.handleChange}
          placeholder="Basic usage" 
          value={this.props.inputValue} 
          style={{width: '300px'}} />
        <Button type="primary" onClick={this.props.handleClick}>Primary</Button>
        <List          
          style={{width: '300px'}}
          size="small"
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => <List.Item onClick={(index)=>{this.props.handleDelete(index)}}>{item}</List.Item>}
        />
      </div>
    )
  }
}

export default TodoListUI;
