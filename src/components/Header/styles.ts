import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 120px;

  > header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 20px;
    height: 100px;

    max-width: 1280px;

    button {
      background: none;
      border: none;
      svg {
        color: #fff;

        &:hover {
          color: ${shade(0.2, '#fff')};
        }
      }
    }
  }
`;

export const TitleContainer = styled.div`
  max-width: 776px;
  width: 100%;
  h1 {
    font-size: 36px;
    line-height: 54px;
    font-weight: 600;
  }

  p {
    max-width: 274px;
    font-weight: 300;
    font-size: 16px;
  }
`;
