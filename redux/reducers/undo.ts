import { Action } from '../actions';
import { Field } from './fields';

export interface UndoState {
  past: Field[][];
  present: Field[][];
}
const undo = reducer => {
  const initialState: UndoState = {
    past: [],
    present: reducer(undefined, {})
  };

  return function(state = initialState, action: Action) {
    const { past, present } = state;

    switch (action.type) {
      case 'UNDO_INPUT':
        const initilPresent = reducer(present, action);
        if (initilPresent === initialState.present) {
          return initialState;
        }
        const prevState = past[past.length - 1];
        const newPastState = past.slice(0, past.length - 1);
        return {
          past: newPastState,
          present: prevState
        };

      default:
        const newPresent = reducer(present, action);
        if (present === newPresent) {
          return state;
        }

        return {
          past: [...past, present],
          present: newPresent
        };
    }
  };
};

export default undo;
