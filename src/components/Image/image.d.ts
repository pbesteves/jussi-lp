export type ImageProps = {
  /**
   * An object containing the URLs and screenWidth
   * to be used with the HTML Picture element.
   *
   * The `screenWidth` is a string without the unit. The component
   * is set to use `min-width`.
   */
  urls: {
    src: string;
    srcSets?: Array<{
      srcSet: string;
      screenWidth: string;
    }>;
  };
  /**
   * Alt text to be used by the browser if the image is broken
   * or missing.
   */
  alt: string;
  width?: string;
  height?: string;
};
