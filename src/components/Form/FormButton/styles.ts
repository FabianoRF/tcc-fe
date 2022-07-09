import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #04d361;
  border-radius: 10px;
  padding: 0 16px;
  height: 56px;
  width: 100%;
  color: #ffffff;
  border: 0;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: ${shade(0.2, '#04D361')};
  }
`;
