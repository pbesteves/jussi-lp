import React from "react";

export type ButtonProps = {
  /**
   * Defines the radius of the borders applied to the
   * <Button />.
   *
   * Default: `xs`
   */
  borderRadius: "xxs" | "xs" | "small" | "large";
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
   * - outline
   * - solid
   * - only-text
   * - only-icon
   *
   * Default: `outline`
   */
  renderMode?: "outline" | "solid" | "only-text" | "only-icon";
};
