import classes from "./Header.module.css";
import Image from "next/image";
import CustomLink from "../UI/CustomLink";

const Header = () => {
  return (
    <header className={classes.Header}>
      <div className={`${classes.Container} container`}>
        <div className={classes.NavigationWrapper}>
          <div>
            <Image
              alt="hamburger-button"
              width={24}
              height={8}
              src="/images/hamburger.svg"
            ></Image>
            <span>MENU</span>
          </div>
          <div>
            <span>rs</span>
            <span></span>
            <span>cn</span>
          </div>
          <div>
            <Image
              alt="sound-image"
              width={32}
              height={32}
              src="/images/sound.svg"
            ></Image>
          </div>
        </div>
        <div className={classes.Logo}>
          <Image
            alt="app-logo"
            width={122}
            height={36}
            src="/images/logo.svg"
          ></Image>
        </div>
        <div className={classes.Links}>
          <div>
            <a href="tel:+381611589430">(061) 158 9430</a>
            <CustomLink type="" href="/">
              Free consultation
            </CustomLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
