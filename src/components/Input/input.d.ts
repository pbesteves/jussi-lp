import React from "react";

export type InputProps = {
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  id: string;
  label?: string;
  placeholder?: string;
  placeholderColor?: "black" | "white" | "gray" | "jussiPink" | "jussiGreen";
  required?: boolean;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
