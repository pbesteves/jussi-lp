import Text from "../Text";
import { Wrapper } from "./style";

const Contact = () => {
  return (
    <Wrapper>
      <Text
        as="h2"
        fontSize="medium"
        color="white"
        fontWeight="bold"
        width="18ch"
      >
        Essa loja foi construída usando uma das nossas soluções da plataforma
        VTEX. tenha a sua.
      </Text>
      <Text as="span" fontSize="regular" color="white">
        Entre em contato
      </Text>
      <Text fontSize="medium" color="white">
        comercial@jussi.com.br
      </Text>
    </Wrapper>
  );
};

export default Contact;
