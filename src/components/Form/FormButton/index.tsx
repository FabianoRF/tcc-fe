import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
};

const FormButton: React.FC<ButtonProps> = ({
  children,
  loading,
  icon: Icon,
  ...rest
}) => (
  <Container type="button" {...rest}>
    {Icon && <Icon size={20} />}
    {loading ? 'Carregando...' : children}
  </Container>
);

export default FormButton;
