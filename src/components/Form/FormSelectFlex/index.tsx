import React, { useRef, useEffect } from 'react';
import { OptionTypeBase, Props as SelectProps } from 'react-select';
import { useField } from '@unform/core';
import { Container, StyledReactSelect } from './styles';

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
  title: string;
}

const FormSelectFlex: React.FC<Props> = ({ name, title, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: any) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);
  return (
    <Container>
      <span>{title}</span>
      <StyledReactSelect
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="Select"
        placeholder="Selecione"
        {...rest}
      />
    </Container>
  );
};

export default FormSelectFlex;
