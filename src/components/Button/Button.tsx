import { ButtonProps } from "./button";
import { ButtonComponent } from "./style";

const defaultButtonProps = {
  renderMode: "outline",
  disabled: false,
};

const Button = ({
  children,
  className,
  disabled,
  renderMode,
  onClick,
}: ButtonProps & typeof defaultButtonProps) => {
  return (
    <ButtonComponent
      className={className}
      disabled={disabled}
      renderMode={renderMode}
      onClick={onClick}
    >
      {children}
    </ButtonComponent>
  );
};

Button.defaultProps = defaultButtonProps;

export default Button;
