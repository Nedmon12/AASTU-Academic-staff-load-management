import { css } from "@emotion/react";
import styled from "@emotion/styled";

const colors = {
  primary: "#111847",
  secondary: "#A37C0C",
  third: "#9B9B9B",
  backgroundColor: "white",
  primary400: "#3F3E73",
  primary300: "#6C68A1",
  primary200: "#9B95D2",
  primary100: "#CCC5FF",
  third100: "#DADADA",
  third200: "#7E7E7E",
  primary500: "#e3f2fd",
};

export default colors;
export const StyledForm = styled.form`
  width: 100%;
  padding: 40px 25px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: green;
  gap: 30px;
  h3 {
    padding: 0px 10px 30px 0px;
    color: ${colors.primary400};
    font-size: 20px;
    font-weight: 500;
    flex-basis: 100%;
    border-bottom: 0.5px solid ${colors.third100};
  }
  .row {
    display: flex;
    gap: 15px;
  }
  .btnGroup {
    display: flex;
    gap: 20px;
    padding-top: 30px;
    width: 100%;
    justify-content: flex-end;
  }
`;

export const MyButton = css`
  padding: 6px 16px;
  font-size: 14px;
  line-height: 24px;
  width: fit-content;
  border: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
`;
export const Success = styled.button`
  ${MyButton};
  background-color: ${colors.secondary};
  color: ${colors.backgroundColor};
`;
export const Cancel = styled.button`
  ${MyButton};
  background-color: ${colors.third};
  color: ${colors.backgroundColor};
`;
