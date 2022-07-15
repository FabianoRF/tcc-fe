import ReactSelect from 'react-select';
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

  span {
    font-weight: 400;
    font-size: 14px;
    margin-left: 8px;
    margin-bottom: 8px;
  }

  > div {
    margin-top: 3px;
  }
`;
