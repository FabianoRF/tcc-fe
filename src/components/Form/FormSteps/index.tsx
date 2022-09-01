import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

type FormStepsProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isSelected?: boolean;
};

const FormSteps: React.FC<FormStepsProps> = ({ isSelected }) => (
  <Container isSelected={isSelected}>
    <Link to="/socio-form">1. Caracterização Sociodemográfica</Link>
    <div />
    <Link to="/clinic-form">2. Caracterização Clínica</Link>
    <div />
    <Link to="/risk-assessment">3. Avaliação de Risco</Link>
  </Container>
);

export default FormSteps;
