import { combineReducers } from 'redux';
import fields, { State as FieldsState } from './fields';
import undoReducer from './undo';

const rootReducer = undoReducer(fields);

export type GlobalState = {
  fields: FieldsState;
};

export default combineReducers({
  fields: rootReducer
});
