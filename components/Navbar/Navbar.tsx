import styles from "./Navbar.module.scss";
import logoWhite from "@public/images/logo-white.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLeft}>
        <div className={styles.navbarIcon}>
          <Image src={logoWhite} alt="ImageFlow" layout="responsive" />
        </div>
      </div>
      <div className={styles.navbarCenter}>
        <Link href="/"><a>imageflow</a></Link>
        </div>
      <div className={styles.navbarRight}>
        <Link href="/editor">
          <a>
            <div className={styles.navbarItem}>Try it out</div>
          </a>
        </Link>
        <Link href="/signin">
          <a>
        <div className={styles.navbarItem}>Sign In</div>
          </a>
        </Link>
        <Link href="/signup">
        <a>
          <div className={styles.navbarItem}>Sign Up</div>
        </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
