import styled from 'styled-components';

export const Container = styled.div`
  color: #272a31;
  width: 100%;
  margin: 6px 0;

  display: flex;
  align-items: center;
  gap: 8px;

  input[type='checkbox'] {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    margin: 0;
    border: 1px solid #e6e6f0;

    /* ...existing styles */
    display: grid;
    place-content: center;
    width: 28px;
    height: 28px;

    &::before {
      content: '';
      width: 20px;
      height: 20px;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 20px 20px #3696f4;
    }

    &:checked::before {
      transform: scale(1);
    }
  }

  label {
    font-size: 16px;
  }
`;
