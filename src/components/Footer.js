import SocialMedia from "./social-link/SocialMedia";
import socialMediaData from "../data/socialMediaData";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <p className={styles["credits"]}>
        Inspired by{" "}
        <a
          className="link"
          href="https://github.com/bchiang7/v4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brittany Chiang
        </a>
      </p>
      <p className={styles["credits"]}>
        &{" "}
        <a
          className="link"
          href="https://github.com/javier-arango/e-portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Javier Arango
        </a>
      </p>
    </div>
  );
};

export default Footer;
