import Creatable from 'react-select/creatable';
import styled from 'styled-components';

export const StyledReactSelect = styled(Creatable)`
  .Select__control {
    min-height: 46px;
    background: #fafafc;
  }

  .Select__placeholder {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
  }
`;

export const Container = styled.div`
  color: #272a31;
  width: 100%;
  margin: 6px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-weight: 400;
    font-size: 16px;
  }

  > div {
    margin-top: 3px;
    min-width: 160px;
  }
`;
