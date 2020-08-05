import styled, { StyledProps } from 'styled-components';

export const Container = styled.span`
  position: relative;
  display: flex;
  padding: 9px 14px;
  background-color: #fff;
`;

export const SearchInput = styled.input`
  width: calc(100% - 40px);
  color: #727272;
  font-size: 12px;
`;

export const SearchImgBtn = styled.img`
  cursor: pointer;
  height: 14px;
  margin-left: auto;
`;

export const PopoverContainer = styled.aside.attrs(
  (props: StyledProps<{ active: boolean }>) => ({
    active: props.active
  })
)`
  z-index: 1010;
  position: absolute;
  width: 100%;
  left: 0px;
  bottom: -10px;
  transform: translateY(100%);
  background-color: #fff;
  box-shadow: 0 8px 6px -6px black;
  display: ${(props) => (props.active ? 'block' : 'none')};
`;

export const TabContainer = styled.div`
  display: flex;
  button {
    width: 50%;
    padding: 12px 24px;
    background-color: #e3e3e3;
    color: #9c9c9c;
    font-size: 14px;
    font-weight: bold;
    &.active {
      color: #4a4a4a;
      background-color: #fff;
    }
  }
`;

export const TabListContainer = styled.ul`
  padding: 20px;
  li {
    display: flex;
    align-items: center;
    color: #333;
    font-size: 12px;
    &.empty {
      justify-content: center;
    }
    & + li {
      margin-top: 12px;
    }
    p {
      color: inherit;
      cursor: pointer;
    }
    button {
      margin-left: auto;
      color: #e3e3e3;
      &.active {
        color: #1ea1f7;
      }
      & + button {
        margin-left: 12px;
      }
    }
  }
`;
