import styled from "styled-components";

const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) =>
    props.boderColor ? `1px solid ${props.boderColor}` : "none"};
  border-radius: ${(props) => props.borderRadius};
  background: ${(props) => props.bgColor};
  font-weight: 500;
  line-height: 21px;
  color: ${(props) => props.textColor};
  color: ${(props) => props.fontSize};
  cursor: pointer;
`;

export const Button = ({
  label,
  width,
  height,
  textColor,
  bgColor,
  boderColor,
  percent,
  fontSize,
  borderRadius,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      percent={percent}
      width={width}
      height={height}
      textColor={textColor}
      bgColor={bgColor}
      boderColor={boderColor}
      fontSize={fontSize}
      borderRadius={borderRadius}
      {...rest}
    >
      {/* {percent && <img src={percent < 0 ? redArrow : greenArrow} alt="arr"></img>} */}
      {label ? label : children}
    </StyledButton>
  );
};
Button.defaultProps = {
  bgColor: "#FFFFFF",
  textColor: "#5429FF",
  width: "128px",
  height: "46px",
  fontSize: 16,
};
