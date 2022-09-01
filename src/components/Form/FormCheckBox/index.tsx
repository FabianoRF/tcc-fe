import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: object;
  label: string;
}

const FormCheckBox: React.FC<CheckBoxProps> = ({
  name,
  value,
  label,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const defaultChecked = defaultValue === value;

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.checked;
      },
      clearValue: (ref: any) => {
        /**
         * If you want to change the default checked for false or true,
         * you can do so here. In this example, when resetting the form,
         * the checkbox goes back to its initial state.
         */
        ref.current.checked = defaultChecked;
      },
      setValue: (ref, vl) => {
        /* eslint no-param-reassign: "error" */
        ref.current.checked = vl;
      },
    });
  }, [defaultValue, fieldName, registerField, defaultChecked]);

  return (
    <Container>
      <input
        defaultChecked={defaultChecked}
        ref={inputRef}
        value={value}
        type="checkbox"
        id={fieldName}
        {...rest}
      />

      <label htmlFor={fieldName} key={fieldName}>
        {label}
      </label>

      {error && <span>{error}</span>}
    </Container>
  );
};

export default FormCheckBox;
