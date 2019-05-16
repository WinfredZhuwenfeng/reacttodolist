import React, { Component } from 'react';
import store from './store';
import { getInputChangeAction, getAddTododoAction, getDeleItemAction, getInitListAction, getInitListSagasAction } from './store/actionCreaters'
import TodoListUI from './TodoListUI';


class TodoListAntd extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleChange = this.handleChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return(
      <TodoListUI 
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        handleDelete={this.handleDelete}
      />
    )
  }

  componentDidMount(){
    const action = getInitListSagasAction()
    store.dispatch(action)
  }

  handleChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleClick() {
    const action = getAddTododoAction()
    store.dispatch(action)
  }
  handleDelete(index) {
    const action = getDeleItemAction(index)
    store.dispatch(action)
  }
}

export default TodoListAntd
