export type SetTextFieldValue = {
  type: 'SET_TEXT_FIELD_VALUE';
  fieldId: string;
  value: string;
};

export type SetNumberFieldValue = {
  type: 'SET_NUMBER_FIELD_VALUE';
  fieldId: string;
  value: number;
};

export type undoInputFieldValue = {
  type: 'UNDO_INPUT';
};

export type Action =
  | SetTextFieldValue
  | SetNumberFieldValue
  | undoInputFieldValue;
