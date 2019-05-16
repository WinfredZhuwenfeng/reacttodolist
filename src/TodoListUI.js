import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';


const TodoListUI = (props) => {
  return (
    <div>
        <Input 
          onChange={props.handleChange}
          placeholder="Basic usage" 
          value={props.inputValue} 
          style={{width: '300px'}} />
        <Button type="primary" onClick={props.handleClick}>Primary</Button>
        <List          
          style={{width: '300px'}}
          size="small"
          bordered
          dataSource={props.list}
          renderItem={(item, index) => <List.Item onClick={(index)=>{props.handleDelete(index)}}>{item}</List.Item>}
        />
      </div>
  )
}

export default TodoListUI;
