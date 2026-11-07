import { FunctionComponent } from "react";
import styles from "./PenutupMenu.module.css";

export type PenutupMenuType = {
  className?: string;
};

const PenutupMenu: FunctionComponent<PenutupMenuType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.penutupMenu, className].join(" ")}>
      <footer className={styles.footer}>
        <div className={styles.identitasThalita}>
          <img className={styles.emblemIcon} alt="" src="/assets/p5/Emblem.svg" />
          <div className={styles.namaBrand}>
            <h2 className={styles.thalita}>thalita</h2>
            <b className={styles.friedChicken}>FRIED CHICKEN</b>
          </div>
        </div>
        <i className={styles.tagline}>Selalu dicinta...</i>
        <div className={styles.hakCipta}>© 2026 Thalita Fried Chicken</div>
      </footer>
    </section>
  );
};

export default PenutupMenu;
