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

export const FormBackgroud = styled.div`
  width: 100%;
  margin-top: 36px;
  padding: 36px;

  background-color: #ffffff;
  border-radius: 8px;
`;

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

export const FormDivisor = styled.hr`
  border: 1px solid #e6e6f0;
  width: 100%;

  margin: 24px 0;
`;

export const ContainerButton = styled.div`
  background: rgba(196, 196, 196, 0.24);
  width: 100%;
  height: 126px;
  margin-top: 64px;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 192px;
  }
`;
