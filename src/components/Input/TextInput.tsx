import { useState } from "react";
import { InputProps } from "./input";
import { Label, TextInputComponent } from "./style";

const defaultInputProps = {
  id: "text-input",
};

const TextInput = ({
  id,
  label,
  className,
  children,
  disabled,
  onBlur,
  onChange,
  onFocus,
  required,
  placeholder,
}: InputProps & typeof defaultInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const onBlurHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.persist();
    onBlur && onBlur(e);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.persist();
    setInputValue(e.target.value);
    onChange && onChange(e);
  };

  const onFocusHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.persist();
    onFocus && onFocus(e);
  };

  return (
    <Label htmlFor={id} className={className}>
      {label ? label : ""}
      <TextInputComponent
        className={className}
        id={id}
        value={inputValue}
        disabled={disabled}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        onFocus={onFocusHandler}
        required={required}
        placeholder={placeholder}
      />
      {children ? children : ""}
    </Label>
  );
};

TextInput.defaultProps = defaultInputProps;

export default TextInput;
