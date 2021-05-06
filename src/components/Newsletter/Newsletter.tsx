import TextInput from "../Input";
import Text from "../Text";
import { Wrapper } from "./style";

const Newsletter = () => {
  return (
    <Wrapper>
      <Text as="span" color="jussiGreen" fontWeight="bold" fontSize="medium">
        / /
      </Text>
      <Text as="h2" fontWeight="bold" fontSize="medium" color="white">
        Receba novidades da nossa áreade produtos digitais.
      </Text>
      <TextInput
        id="newsletter-input"
        placeholder="Digite seu e-mail"
        className="NewsletterInput"
      />
    </Wrapper>
  );
};

export default Newsletter;
