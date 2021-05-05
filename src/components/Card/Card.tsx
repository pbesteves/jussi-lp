import { CardProps } from "./card";
import { CardComponent } from "./style";

const Card = ({ children, className }: CardProps) => {
  return <CardComponent className={className}>{children}</CardComponent>;
};

export default Card;
