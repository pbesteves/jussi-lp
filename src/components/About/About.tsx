import JussiPicture from "../../assets/images/image-jussi.png";
import Button from "../Button";
import Image from "../Image";
import Text from "../Text";
import { Wrapper } from "./style";

const About = () => {
  return (
    <Wrapper>
      <div className="About">
        <Text as="h2" fontWeight="bold" fontSize="medium" uppercase>
          Olá, somos a Jüssi
        </Text>
        <Text className="Paragraph" width="27ch">
          A Jüssi é uma agência integrante do grupo global WPP que vem há 10
          anos consolidando o pensamento voltado para produtos e resolução de
          problemas. Nosso área dedicada exclusivamente para Produtos Digitais é
          organizada em 6 especialidades: Product Managamenet, User Experience
          Design, SEO, Tecnologia, Agile e User Behavior Analytics.
        </Text>
        <Button>Conheça a Jüssi</Button>
      </div>
      <div className="RightBlock" />
      <Image urls={{ src: JussiPicture }} alt="Jussi"/>
    </Wrapper>
  );
};

export default About;
