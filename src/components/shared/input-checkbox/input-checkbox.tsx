import React, { ChangeEvent, useEffect, useState } from 'react';

import { CheckboxProps } from '@shared/input-checkbox/types';

function InputCheckbox({
  children,
  name = 'checkbox',
  value = 'checkbox',
  id = 'checkbox',
  isChecked = false,
  onChange = () => undefined,
}: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    onChange({
      target: {
        name,
        value: evt.target.value,
        isChecked: evt.target.checked,
      },
    });
  };

  return (
    <label>
      <input
        className="visually-hidden"
        type="checkbox"
        name={name}
        value={value}
        id={id}
        checked={checked}
        onChange={handleChange}
      />
      <span>{children}</span>
    </label>
  );
}

export default InputCheckbox;
