import Button from "./Button";
import classes from "./Card.module.css";
import Image from "next/image";
import CustomLink from "../UI/CustomLink";

const Card = ({ title, description, image, id }) => {
  return (
    <div className={classes.Card}>
      <div className={classes.CardImageWrapper}>
        <Image
          alt="card-image"
          src={`http://localhost:1337${image}`}
          layout="fill"
        />
      </div>
      <div className={classes.CardInfoWrapper}>
        <h3>{title}</h3>
        <p className="p">{description}</p>
        <div className={classes.CardBtnWrapper}>
          <Button btnType="primary">Book now</Button>
          <CustomLink type="secondary" href={`/${id}`} btnType="secondary">
            Visit
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
