import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 776px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  div {
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
  }
`;
