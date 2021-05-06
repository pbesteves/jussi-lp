import { ImageProps } from "./image";
import { ImageComponent } from "./style";

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

      <ImageComponent src={urls.src} alt={alt} width={width} height={height} />
    </picture>
  );
};

export default Image;
