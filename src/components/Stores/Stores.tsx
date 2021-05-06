import LogoBrastemp from "../../assets/images/logo-brastemp.svg";
import LogoBrastempLarge from "../../assets/images/logo-brastemp@3x.svg";
import LogoCompraCerta from "../../assets/images/logo-compra.svg";
import LogoCompraCertaLarge from "../../assets/images/logo-compra@3x.svg";
import LogoConsul from "../../assets/images/logo-consul.svg";
import LogoTheBar from "../../assets/images/logo-thebar.svg";
import LogoTheBarLarge from "../../assets/images/logo-thebar@3x.svg";
import Image from "../Image";
import Text from "../Text";
import { Wrapper } from "./style";

const Stores = () => {
  return (
    <Wrapper>
      <Text>Nossas principais lojas VTEX</Text>
      <Text>→</Text>
      <Image
        urls={{
          src: LogoBrastemp,
          srcSets: [
            {
              srcSet: LogoBrastempLarge,
              screenWidth: "1280",
            },
          ],
        }}
        alt="Brastemp"
      />
      <Image
        urls={{
          src: LogoCompraCerta,
          srcSets: [
            {
              srcSet: LogoCompraCertaLarge,
              screenWidth: "1280",
            },
          ],
        }}
        alt="Compra Certa"
      />
      <Image
        urls={{
          src: LogoConsul,
        }}
        alt="Consul"
      />
      <Image
        urls={{
          src: LogoTheBar,
          srcSets: [
            {
              srcSet: LogoTheBarLarge,
              screenWidth: "1280",
            },
          ],
        }}
        alt="The Bar"
      />
    </Wrapper>
  );
};

export default Stores;
