import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  icon?: IconType;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  icon,
  ...rest
}) => (
  <Container type="button" {...rest}>
    <>{icon}</>
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
