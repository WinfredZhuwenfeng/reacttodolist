import { INPUT_CHANGE_VAULE, ADD_TODO_ITEM, DEL_TODO_ITEM,INIT_TODO_LIST } from './actionTypes'

export const getInputChangeAction = (value) => ({
  type: INPUT_CHANGE_VAULE,
  value
});

export const getAddTododoAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleItemAction = (index) => ({
  type: DEL_TODO_ITEM,
  index
});

export const getInitListAction = (data) => ({
  type: INIT_TODO_LIST,
  data
});
