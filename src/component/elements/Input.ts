import styled, { StyledProps } from 'styled-components';
import SearchIcon from '../../assets/icons/search-icon.svg';

interface InputProps {
  width?: number;
}
const Input = styled.input.attrs((props: StyledProps<InputProps>) => ({
  width: props.width ? `${props.width}px` : '260px'
}))`
  position: relative;
  padding: 9px 14px;
  padding-right: 48px;
  color: #727272;
  font-size: 12px;
  width: ${(props) => props.width};
  background-color: #fff;

  &.search {
    background-image: url(${SearchIcon});
    background-repeat: no-repeat;
    background-position: calc(100% - 14px) center;
    background-size: auto 14px;
  }
`;

export default Input;
