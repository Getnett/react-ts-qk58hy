import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { undoInputFieldValue } from './redux/actions';

export default function Undo() {
  const dispatch = useDispatch();
  const handleUndo = useCallback(() => {
    const action: undoInputFieldValue = {
      type: 'UNDO_INPUT'
    };
    dispatch(action);
  }, []);

  return (
    <div
      style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}
    >
      <button onClick={handleUndo}>Undo</button>
    </div>
  );
}
