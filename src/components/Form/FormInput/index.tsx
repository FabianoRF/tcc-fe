import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, InputArea, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  name: string;
  containerStyle?: object;
}

const FormInput: React.FC<InputProps> = ({
  title,
  name,
  containerStyle,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <span>{title}</span>
      <InputArea
        isErrored={!!error}
        isFilled={isFilled}
        isFocused={isFocused}
        style={containerStyle}
      >
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
        {error && (
          <Error title={error}>
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        )}
      </InputArea>
    </Container>
  );
};

export default FormInput;
