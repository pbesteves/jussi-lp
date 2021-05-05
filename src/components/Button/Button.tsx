import { ButtonProps } from "./button";
import { ButtonComponent } from "./style";

const defaultButtonProps = {
  renderMode: "outline",
  disabled: false,
  borderRadius: "xs",
};

const Button = ({
  children,
  className,
  disabled,
  renderMode,
  onClick,
  borderRadius,
}: ButtonProps & typeof defaultButtonProps) => {
  return (
    <ButtonComponent
      className={className}
      disabled={disabled}
      renderMode={renderMode}
      onClick={onClick}
      borderRadius={borderRadius}
    >
      {children}
    </ButtonComponent>
  );
};

Button.defaultProps = defaultButtonProps;

export default Button;
