import CustomLink from "../UI/CustomLink";
import classes from "./Hero.module.css";

const Hero = ({ title, description, linkText, children }) => {
  return (
    <div className={`${classes.Hero} container`}>
      <div>
        {children}
        <p className={`large-p ${classes.Paragraph}`}>{description}</p>
        <CustomLink type="primary" href="/">
          {linkText}
        </CustomLink>
        <div className={classes.Treatments}>
          <p className="large-p">Popular Treatments</p>
          <div>
            <CustomLink type="hero-link" href="/">
              Cupping,
            </CustomLink>
            <CustomLink type="hero-link" href="/">
              Acupuncture,
            </CustomLink>
            <CustomLink type="hero-link" href="/">
              Mpxibustion
            </CustomLink>
          </div>
        </div>
      </div>
      <div>
        <div>Image</div>
        <div>Image</div>
        <div>Image</div>
      </div>
    </div>
  );
};

export default Hero;
