import Button from "../Button";
import TextInput from "../Input";
import Text from "../Text";
import { Wrapper } from "./style";

const Newsletter = () => {
  return (
    <Wrapper>
      <div className='TextWrapper'>
        <Text as="span" color="jussiGreen" fontWeight="bold" fontSize="medium">
          / /
        </Text>
        <Text as="h2" fontWeight="bold" fontSize="medium" color="white">
          Receba novidades da nossa área de produtos digitais.
        </Text>
      </div>
      <TextInput
        id="newsletter-input"
        placeholder="Digite seu e-mail"
        className="NewsletterInput"
        children={<Button renderMode="solid">Cadastrar</Button>}
      />
    </Wrapper>
  );
};

export default Newsletter;
