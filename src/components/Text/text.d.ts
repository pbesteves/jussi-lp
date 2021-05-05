export type TextProps = {
  /**
   * Tells the component which HTML Element should be used to render the component.
   *
   * Defaults to the Paragraph tag
   * */
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  /**
   * Defines what color the text should be.
   *
   * Defaults to the color "black"
   */
  color?: "white" | "black" | "gray" | "jussiGreen" | "jussiPink";
  /**
   * Defines the font-size of the text.
   *
   * Defaults to "regular"
   */
  fontSize?: "regular" | "medium" | "large";
  /**
   * Defines the font-family of the text.
   *
   * Defaults to "Inter"
   */
  fontFamily?: string;
  /**
   * Defines the font-weight of the text.
   *
   * Defaults to "regular"
   */
  fontWeight?: "regular" | "bold";
  uppercase?: boolean;
  width?: string;
};
