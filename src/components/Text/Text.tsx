import { TextComponent } from "./style";
import { TextProps } from "./text";

const defaultTextProps = {
  as: "p",
  color: "black",
  fontFamily: "Barlow",
  fontSize: "1rem",
  fontWeight: "regular",
  uppercase: false,
  width: "max-content",
};

const Text = ({
  as,
  children,
  className,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  uppercase,
  width,
}: TextProps & typeof defaultTextProps) => {
  return (
    <TextComponent
      as={as}
      className={className}
      color={color}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      fontSize={fontSize}
      uppercase={uppercase}
      width={width}
    >
      {children}
    </TextComponent>
  );
};

Text.defaultProps = defaultTextProps;

export default Text;
