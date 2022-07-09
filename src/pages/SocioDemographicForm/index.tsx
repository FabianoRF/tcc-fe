import React from 'react';
import FormSteps from '../../components/FormSteps';

import { Container, Content } from './styles';

const SocioDemographicForm: React.FC = () => {
  const abc = 'dsfasdf';

  return (
    <Container>
      <h1>Logo/Arte a definir</h1>

      <Content>
        <div>
          <h1>Caracterização sociodemográfica</h1>
          <p>Por favor preecha o formulário abaixo</p>
        </div>

        <FormSteps />

        <div>
          <button>Próximo Passo</button>
        </div>
      </Content>
    </Container>
  );
};

export default SocioDemographicForm;
