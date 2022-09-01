import React from 'react';
import { FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import FormSteps from '../Form/FormSteps';

import { Container, TitleContainer } from './styles';

interface HeaderProps {
  title: string;
  subtitle: string;
  hideSteps?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  hideSteps = false,
}) => {
  const { signOut } = useAuth();
  return (
    <Container>
      <header>
        <h1>Logo/Arte a definir</h1>
        <button onClick={signOut} type="button">
          <FiPower size={48} />
        </button>
      </header>

      <TitleContainer>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </TitleContainer>

      {!hideSteps && <FormSteps />}
    </Container>
  );
};

export default Header;
