import { ImageProps } from "./image";

const Image = ({ urls, alt, width, height }: ImageProps) => {
  return (
    <picture>
      {urls.srcSets &&
        urls.srcSets.map(({ srcSet, screenWidth }, idx) => (
          <source
            key={idx}
            srcSet={srcSet}
            media={`(min-width: ${screenWidth}px)`}
          />
        ))}

      <img src={urls.src} alt={alt} width={width} height={height} />
    </picture>
  );
};

export default Image;
