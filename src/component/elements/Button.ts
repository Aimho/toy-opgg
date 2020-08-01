import styled, { StyledProps, css } from "styled-components";

const ButtonPrimary = css`
  background-color: #ffd400;
`;

const ButtonSecondary = css`
  color: #fff;
  background-color: #fb842d;
`;

const ButtonTertiary = css`
  background-color: transparent;
`;

const ButtonDefault = css`
  background-color: #f2f3f7;
`;

interface ButtonProps {
  theme?: "primary" | "secondary" | "tertiary";
}

/**
 * 버튼 컴포넌트
 * @param theme undefined | 'primary' | 'secondary' | 'tertiary'
 */
const Button = styled.button.attrs((props: StyledProps<ButtonProps>) => ({
  theme: props.theme ? props.theme : "",
}))`
  /* theme style */
  ${(props: ButtonProps) => {
    switch (props.theme) {
      case "primary":
        return ButtonPrimary;
      case "secondary":
        return ButtonSecondary;
      case "tertiary":
        return ButtonTertiary;
      default:
        return ButtonDefault;
    }
  }}

  /* common style */
  position: relative;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  transition: transform 0.3s;

  &:disabled {
    color: #9a9ba7;
    background-color: #c8cad2;
  }
  &:enabled:hover {
    transform: translateY(-2px);
  }
`;

export default Button;
