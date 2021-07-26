import React, { Component } from 'react';
import { render } from 'react-dom';
import FieldRenderer from './FieldRenderer';
import { useFields } from './redux/selectors';
import Undo from './Undo/components/Undo';
import './style.css';

const App = props => {
  const fields = useFields();

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {fields &&
        fields.present.map(field => (
          <FieldRenderer store={props.store} key={field.id} field={field} />
        ))}
      <Undo />
    </div>
  );
};
export default App;
