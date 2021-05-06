import FirstProductImage from "../../assets/images/product-image-1.png";
import SecondtProductImage from "../../assets/images/product-image-2.png";
import ThirdProductImage from "../../assets/images/product-image-3.png";
import FourthProductImage from "../../assets/images/product-image-4.png";
import Button from "../Button";
import Card from "../Card";
import Image from "../Image";
import Text from "../Text";
import { Wrapper } from "./style";
// const solutions = [...new Array(4)];
const products = [
  {
    name: "Nome do Produto #1",
    thumbnail: {
      image: FirstProductImage,
      alt: "Produto 1",
    },
    description: "Descrição do produto #1",
  },
  {
    name: "Nome do Produto #2",
    description: "Descrição do produto #2",
    thumbnail: {
      image: SecondtProductImage,
      alt: "Produto 2",
    },
  },
  {
    name: "Nome do Produto #3",
    description: "Descrição do produto #3",
    thumbnail: {
      image: ThirdProductImage,
      alt: "Produto 3",
    },
  },
  {
    name: "Nome do Produto #4",
    description: "Descrição do produto #4",
    thumbnail: {
      image: FourthProductImage,
      alt: "Produto 4",
    },
  },
];

const Solutions = () => {
  return (
    <Wrapper>
      <div className="TitleWrapper">
        <Text as="h2" fontSize="medium" fontWeight="bold" uppercase>
          <Text as="span" color="jussiGreen">
            / /
          </Text>
          Nossas soluções
        </Text>
      </div>
      <div className="SolutionWrapper">
        {products.map(
          ({ name, description, thumbnail: { image, alt } }, idx) => (
            <Card key={idx}>
              <Image urls={{ src: image }} alt={alt} />
              <Text>{name}</Text>
              <Text color="jussiPink">{description}</Text>
              <ul>
                <li>
                  <Text fontSize="small" color="darkGray">
                    Feature 1
                  </Text>
                </li>
                <li>
                  <Text fontSize="small" color="darkGray">
                    Feature 2
                  </Text>
                </li>
                <li>
                  <Text fontSize="small" color="darkGray">
                    Feature 3
                  </Text>
                </li>
              </ul>
              <Button renderMode="solid">Ver solução</Button>
            </Card>
          )
        )}
      </div>
    </Wrapper>
  );
};

export default Solutions;
