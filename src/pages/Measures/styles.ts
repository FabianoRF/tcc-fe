import styled from 'styled-components';

interface FormBackgroudProps {
  color: string;
}

export const Container = styled.div`
  background-color: #eaeff3;
`;

export const Content = styled.div`
  max-width: 776px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormBackgroud = styled.div<FormBackgroudProps>`
  width: 100%;
  margin-top: -64px;
  margin-bottom: 64px;
  padding: 36px;

  background-color: #ffffff;
  border-radius: 8px;

  h1 {
    color: ${props => props.color};
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 20px;
  }

  p {
    font-weight: 300;
    font-size: 16px;
    color: #272a31;
    margin-top: 8px;
  }

  .buttons-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 12px;
  }
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
