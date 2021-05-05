import FridgeImage from "../../../assets/images/fridge.png";
import MixerImage from "../../../assets/images/mixer.png";
import WhiskeyImage from "../../../assets/images/whiskey.png";
import Button from "../../Button";
import Card from "../../Card";
import Image from "../../Image";
import { BannerCardsContainer } from "./style";

const BannerCards = () => {
  return (
    <BannerCardsContainer>
      <Card className="BottomCard">
        <Image
          urls={{
            src: FridgeImage,
          }}
          alt="fridge"
        />
        <Button borderRadius="large">Mais Detalhes</Button>
      </Card>
      <Card className="MiddleCard">
        <Image
          urls={{
            src: WhiskeyImage,
          }}
          alt="whiskey"
        />
        <Button borderRadius="large">Adicionar à sacola</Button>
      </Card>
      <Card className="TopCard">
        <Image
          urls={{
            src: MixerImage,
          }}
          alt="mixer"
        />
        <Button borderRadius="large">Comprar em 12x</Button>
      </Card>
    </BannerCardsContainer>
  );
};

export default BannerCards;
