import styles from "./Navbar.module.scss";
import logoWhite from "../../public/images/logo-white.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLeft}>
        <div className={styles.navbarIcon}>
          <Image src={logoWhite} alt="ImageFlow" layout="responsive" />
        </div>
      </div>
      <div className={styles.navbarCenter}>imageflow</div>
      <div className={styles.navbarRight}>
        <div className={styles.navbarItem}>Sign In</div>
        <div className={styles.navbarItem}>Sign Up</div>
      </div>
    </div>
  );
};

export default Navbar;
