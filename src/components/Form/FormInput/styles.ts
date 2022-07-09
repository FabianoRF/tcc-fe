import styled, { css } from 'styled-components';

import Tooltip from '../../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

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
`;

export const InputArea = styled.div<ContainerProps>`
  background: #fafafc;
  border: 1px solid #e6e6f0;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  height: 46px;

  color: #272a31;

  display: flex;
  align-items: center;
  margin-top: 3px;

  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #272a31;
      border-color: #272a31;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #272a31;
    `}



  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #272a31;

    &::placeholder {
      color: #272a31;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin-right: 0;
  }

  span {
    background: #c53030;
    color: #fff;
  }
`;
