export type TextProps = {
  /**
   * Tells the component which HTML Element should be used to render the component.
   *
   * Default: `<p>`
   * */
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  /**
   * Defines what color the text should be.
   *
   * Defaults: `black`
   */
  color?: "white" | "black" | "gray" | "darkGray" | "jussiGreen" | "jussiPink";
  /**
   * Defines the font-size of the text.
   *
   * Defaults: `regular`
   */
  fontSize?: "small" | "regular" | "medium" | "large";
  /**
   * Defines the font-family of the text.
   *
   * Defaults: `Inter`
   */
  fontFamily?: string;
  /**
   * Defines the font-weight of the text.
   *
   * Default: `regular`
   */
  fontWeight?: "regular" | "bold";
  /**
   * Sets the text to uppercase
   */
  uppercase?: boolean;
  /**
   * Defines the width of the containing box
   *
   * Default: `max-content`
   */
  width?: string;
};
