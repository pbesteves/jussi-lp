import useWindowSize, { Size } from "../../hooks/useWindowSize";
import Button from "../Button";
import Text from "../Text";
import { BannerComponent } from "./style";

const Banner = () => {
  const { width: screenWidth }: Size = useWindowSize();
  let fontSize: "regular" | "medium" | "large";
  fontSize = screenWidth && screenWidth <= 768 ? "medium" : "large";

  return (
    <BannerComponent>
      <div className="TitleContainer">
        <Text className="TitleDecorator" fontSize={fontSize} color="white">
          / /
        </Text>
        <Text as="h1" width="12ch" fontSize={fontSize} uppercase>
          Criamos lojas que vendem mais.
        </Text>
      </div>
      <Text
        className="BannerParagraph"
        width={screenWidth && screenWidth < 768 ? "27ch" : "37ch"}
      >
        A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
        Precisa criar sua loja ou migrar de plataforma?
      </Text>
      <Button className="BannerButton">Veja nossas soluções</Button>
    </BannerComponent>
  );
};

export default Banner;
