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
  disabled,
  onBlur,
  onChange,
  onFocus,
  icon,
  required,
  placeholder,
}: InputProps & typeof defaultInputProps) => {
  const [, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onBlurHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.persist();
    if (inputValue.length === 0) setIsFocused(false);
    onBlur && onBlur(e);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.persist();
    setInputValue(e.target.value);
    onChange && onChange(e);
  };

  const onFocusHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.persist();
    setIsFocused(true);
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
      {icon ? icon : ""}
    </Label>
  );
};

TextInput.defaultProps = defaultInputProps;

export default TextInput;
