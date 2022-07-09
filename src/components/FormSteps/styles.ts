import styled, { css } from 'styled-components';

interface ContainerProps {
  isSelected?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background: #ffffff;
  border-radius: 8px;
  margin-top: 42px;
  height: 51px;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    color: #272a31;
    font-size: 12px;
    font-weight: 300;
    text-decoration: none;

    flex: 1;

    ${props =>
      props.isSelected &&
      css`
        color: #04d361;
        font-weight: 600;
      `}

    &:hover {
      color: #04d361;
      font-weight: 600;
    }
  }

  div {
    border: 1px solid #3696f4;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    height: 100%;
  }
`;

export const Content = styled.div``;
