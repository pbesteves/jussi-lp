import React from "react";

export type InputProps = {
  className?: string;
  /**
   * Defines if the input should be disabled or not
   *
   * Default: `false`
   */
  disabled?: boolean;
  children?: React.ReactNode;
  id: string;
  label?: string;
  placeholder?: string;
  /**
   * Color of the placeholder text
   *
   * Default: `black`
   */
  placeholderColor?: "black" | "white" | "gray" | "jussiPink" | "jussiGreen";
  required?: boolean;
  /**
   * A function that takes an `Event` and is fired when the `onBlur`
   * event occurs.
   */
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * A function that takes an `Event` and is fired when the `onChange`
   * event occurs.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * A function that takes an `Event` and is fired when the `onFocus`
   * event occurs.
   */
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
