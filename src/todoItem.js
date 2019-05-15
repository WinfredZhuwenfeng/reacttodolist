import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Todoitem extends Component {
  constructor(props){
    super(props);
    this.handleDelteEvent = this.handleDelteEvent.bind(this)
  }
  render() {
    const { content } = this.props 
    return (
      <div onClick={this.handleDelteEvent}>
        {content}
      </div>
    )
  }
  handleDelteEvent() {
    const { handleDelte, index } = this.props
    handleDelte(index)
  }
}

Todoitem.propTypes = {
  content: PropTypes.string
}

export default Todoitem;
