import { FunctionComponent } from "react";
import styles from "./PenutupMenu.module.css";

export type PenutupMenuType = {
  className?: string;
};

const PenutupMenu: FunctionComponent<PenutupMenuType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.penutupMenu, className].join(" ")}>
      <div className={styles.footer}>
        <div className={styles.identitasThalita}>
          <img className={styles.emblemIcon} alt="" src="/assets/p4/Emblem.svg" />
          <div className={styles.namaBrand}>
            <div className={styles.thalita}>thalita</div>
            <b className={styles.friedChicken}>FRIED CHICKEN</b>
          </div>
        </div>
        <i className={styles.tagline}>Selalu dicinta...</i>
        <div className={styles.hakCipta}>© 2026 Thalita Fried Chicken</div>
      </div>
    </div>
  );
};

export default PenutupMenu;
