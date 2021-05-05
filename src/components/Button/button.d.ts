import React from "react";

export type ButtonProps = {
  borderRadius: "small" | "large";
  children: React.ReactNode;
  className?: string;
  /**
   * Indicates if the button should be disabled
   */
  disabled: boolean;
  /**
   * A function that takes no parameters and returns void
   */
  onClick?: () => void;
  /**
   * Indicates how the `<Button />` should be render
   * Options are
   * - outline (default)
   * - solid
   * - only-text
   * - only-icon
   */
  renderMode?: "outline" | "solid" | "only-text" | "only-icon";
};
