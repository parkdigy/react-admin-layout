import React from 'react';

export const useChanged = (value: any, callback: () => void) => {
  const [_value, _setValue] = React.useState(value);

  if (value !== _value) {
    _setValue(value);
    callback();
  }
};
