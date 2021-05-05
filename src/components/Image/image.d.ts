export type ImageProps = {
  urls: {
    src: string;
    srcSets?: Array<{
      srcSet: string;
      screenWidth: string;
    }>;
  };
  alt: string;
  width?: string;
  height?: string;
};
