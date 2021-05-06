import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/linkedin.svg";
import WppLogo from "../../assets/images/wppcompany.svg";
import WppLogoLarge from "../../assets/images/wppcompany@2x.svg";
import Image from "../../components/Image";
import { Wrapper } from "./style";

const Footer = () => {
  return (
    <Wrapper>
      <Image
        urls={{
          src: WppLogo,
          srcSets: [
            {
              srcSet: WppLogoLarge,
              screenWidth: "1280",
            },
          ],
        }}
        alt="WPP Company"
      />
      <div>
        <FacebookIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </div>
    </Wrapper>
  );
};

export default Footer;
